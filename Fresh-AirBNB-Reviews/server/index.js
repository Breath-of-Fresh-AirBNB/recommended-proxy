/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const cors = require('cors');
const Review = require('../database/review.js');

const PORT = 3003;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/reviews', (req, res) => {
  Review.find({}, (err, result) => {
    if (err) res.status(400).send();
    res.status(200).send(result);
  });
});

app.get('/reviews/:homeId', (req, res) => {
  const id = { homeId: Number(req.params.homeId) };
  Review.find(id).sort({ createdAt: 'descending' }).exec((err, result) => {
    if (err) res.status(400).send();
    res.status(200).send(result);
  });
});

app.post('/reviews', (req, res) => {
  console.log(req.body);
  Review.create(req.body, (err, result) => {
    if (err) res.status(400).send();
    res.status(200).send(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server is Up on localhost:${PORT}!`);
});
