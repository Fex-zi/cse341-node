const express = require('express');
const router = express.Router();
const Contact = require('../models/contact'); // Create a 'Contact' model

// Create a new contact
router.post('/', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const contact = new Contact({ name, email, phone });
    await contact.save();
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create contact' });
  }
});

module.exports = router;
