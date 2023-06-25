const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'], 
}));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname)));

// Define a route for serving the main.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

