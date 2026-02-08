const express = require('express');
const app = express();
const port = 3000;

// This defines the "Home Page" (the root route '/')
app.get('/', (req, res) => {
  res.send('<h1>Welcome to my Home Page!</h1><p>This is served from index.js</p>');
});

// This starts the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});