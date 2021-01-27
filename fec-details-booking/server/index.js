const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3002;

// middleware
const morgan = require('morgan');
const parser = require('body-parser');

// logging and parsing
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// database
const db = require('../database/getProps.js');

// serve the client files (webpage)
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/props/:propId', cors(), (req, res) => {
  db.getById(req, res);
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening at localhost:${PORT}!`);
});
