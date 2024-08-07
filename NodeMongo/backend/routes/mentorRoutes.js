const express = require('express');
const Mentor = require('../models/mentorModels');
const Student = require('../models/studentModel');

const router = express.Router();

// Create a mentor
router.post('/', async (req, res) => {
  try {
    const mentor = new Mentor({
      name: req.body.name
    });
    await mentor.save();
    res.status(201).send(mentor);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get all students for a particular mentor
router.get('/:id/students', async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id).populate('students');
    if (!mentor) return res.status(404).send('Mentor not found');
    res.send(mentor.students);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
