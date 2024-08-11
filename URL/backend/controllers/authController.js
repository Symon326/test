const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ message: 'User registered.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } else {
    res.status(400).json({ error: 'Invalid credentials' });
  }
};

exports.resetPassword = async (req, res) => {
  const { password } = req.body;
  const user = await User.findById(req.params.token); // Assuming token is user ID for simplicity
  if (user) {
    user.password = password;
    await user.save();
    res.json({ message: 'Password reset successfully' });
  } else {
    res.status(400).json({ error: 'Invalid token' });
  }
};

