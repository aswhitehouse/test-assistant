const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require('cors');
const app = express();
const port = 3000;
const path = require('path');

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'], 
}));

// Serve the Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/swagger.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'swagger.json'));
});
// Example endpoints
app.get('/api/users', (req, res) => {
  res.json({ message: 'List of users' });
});

app.get('/api/posts', (req, res) => {
  res.json({ message: 'List of posts' });
});

app.get('/api/products', (req, res) => {
  res.json({ message: 'List of products' });
});

// Start the server
app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});

