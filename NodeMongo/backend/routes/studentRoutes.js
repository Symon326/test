const express = require('express');
const Mentor = require('../models/mentorModels');
const Student = require('../models/studentModel');

const router = express.Router();

// Create students
router.post('/', async (req, res) => {
  try {
    const student = new Student({
      name: req.body.name
    });
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Assign or change mentor for a particular student by using object ids 
router.put('/:studentId/assign-mentor/:mentorId', async (req, res) => {
  try {
    const student = await Student.findById(req.params.studentId);
    const mentor = await Mentor.findById(req.params.mentorId);
    if (!student || !mentor) return res.status(404).send('Student or Mentor not found');
    
    // if found Remove student from previous mentor
    if (student.mentor) {
      const oldMentor = await Mentor.findById(student.mentor);
      oldMentor.students.pull(student._id);
      await oldMentor.save();
    }

    // Assign new mentor
    student.mentor = mentor._id;
    await student.save();

    // Add student to new mentor
    mentor.students.push(student._id);
    await mentor.save();

    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get the previous mentor for a particular student
router.get('/:id/previous-mentor', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate('mentor');
    if (!student) return res.status(404).send('Student not found');
    res.send(student.mentor);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get all students without mentors
router.get('/', async (req, res) => {
  try {
    const students = await Student.find({ mentor: null });
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
