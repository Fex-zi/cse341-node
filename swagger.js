const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/contacts.js'];

const options = {
  info: {
    version: '1.0.0',
    title: 'Contacts API',
    description: 'API for storing and retrieving information about contacts.',
  },
  host: 'project1-cdei.onrender.com', //localhost:3001 ..node swagger.js .. npm start
  basePath: '/contacts',  
  schemes: ['https'], //http
};

swaggerAutogen(outputFile, endpointsFiles, options);
