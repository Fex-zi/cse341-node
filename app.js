const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001; 
const dotenv = require('dotenv');
dotenv.config();
const contactsRouter = require('./routes/contacts');
app.use('/contacts', contactsRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Mparse JSON requests
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
  });

// Defining my routes

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
