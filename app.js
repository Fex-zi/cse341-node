const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json'); 

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

//parse JSON requests
app.use(express.json());

// Define routes
const contactsRouter = require('./routes/contacts');
app.use('/contacts', contactsRouter);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
