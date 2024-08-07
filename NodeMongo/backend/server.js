const express = require('express');
const mongoose = require('mongoose');

//middleware
const app = express();
app.use(express.json());

// Routes
const mentorRoutes = require('./routes/mentorRoutes');
const studentRoutes = require('./routes/studentRoutes');

app.use('/mentors', mentorRoutes);
app.use('/students', studentRoutes);

// Connect to mongoDB Atlas
mongoose.connect('mongodb+srv://antonysymonfx516pe:antony_04_Symon_16%402000@cluster0.pkjae.mongodb.net/mentor_student_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((err) => console.log(err));
