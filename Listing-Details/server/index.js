const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const models = require('./models');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/listings', (req, res) => {
  models.getAllListings((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.get('/listings/:home', (req, res) => {
  const home = { home: Number(req.params.home) };
  models.getListing(home, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.delete('/listings/:home', (req, res) => {
  const home = { home: Number(req.params.home) };
  models.deleteListing(home, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});
