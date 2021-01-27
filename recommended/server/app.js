import express from 'express';

const bodyParser = require('body-parser');
const Home = require('../database/homeSchema.js');
const Activity = require('../database/activitySchema.js');

const app = express();
app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/homes/:id', (req, res) => {
  Home.find({ homeId: req.params.id })
    .then((home) => {
      Home.find({ destination: home[0].destination })
        .then((homes) => {
          res.status(200).send(homes);
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/activities/:id', (req, res) => {
  Home.find({ homeId: req.params.id })
    .then((home) => {
      Activity.find({ destination: home[0].destination })
        .then((activities) => {
          res.status(200).send(activities);
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = app;
