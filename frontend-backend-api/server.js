// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const data = require('./data');

app.use(cors());

// GET endpoint
app.get('/api/data', (req, res) => {
  res.json(data);
});

// Static frontend (optional)
app.use(express.static('public'));

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:8080`);
});