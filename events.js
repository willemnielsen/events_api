const express = require('express');
const app = express();
const events = require('./events.json');
const cors = require('cors');

const corsOpts = {
  origin: 'http://localhost:3000',

  methods: [
    'GET'
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));

app.get('/events', (req, res) => {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  console.log('GET request received');
  console.log(events);
  res.json(events);
});

app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});
