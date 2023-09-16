const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;
const dotenv = require('dotenv');
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware to parse JSON requests
app.use(express.json());

// Defined my contacts route
const contactsRouter = require('./routes/contacts');
app.use('/contacts', contactsRouter);

// Defined my other routes here
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
