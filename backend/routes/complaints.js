const express = require('express');
const Complaint = require('../models/Complaint');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  const { title, description, department } = req.body;
  const complaint = new Complaint({ title, description, department, user: req.user.id });
  await complaint.save();
  res.status(201).json(complaint);
});

router.get('/', auth, async (req, res) => {
  const complaints = await Complaint.find({ user: req.user.id });
  res.json(complaints);
});

module.exports = router;
