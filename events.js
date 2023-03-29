const express = require('express');
const app = express();
const events = require('./events.json');
const cors = require('cors');

app.use(cors());

app.get('/events', (req, res) => {
  console.log('GET request received');
  console.log(events);
  res.json(events);
});

app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});
