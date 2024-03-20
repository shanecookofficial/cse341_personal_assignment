const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Contacts API'
  },
  host: 'https://cse341-personal-assignment-lciu.onrender.com/',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./src/routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });