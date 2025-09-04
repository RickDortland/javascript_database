// importing the modules
const express = require('express');
// Creating an instance of Express
const app = express();
// Define the port for the server
const port = 3000;
// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

// Create a GET route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});