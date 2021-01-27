const Prop = require('./Prop.js');

module.exports = {
  getAll(req, res) {
    Prop.find({})
      .catch((err) => {
        console.log('err', err);
        // db.close();
        res.status(404).send(err);
      })
      .then((results) => {
        console.log('success!');
        // db.close();
        res.status(200).send(results);
      });
  },
  getById(req, res) {
    const int = parseInt(req.params.propId, 10);
    Prop.find({ propId: int })
      .catch((err) => {
        console.log('err', err);
        // db.close();
        res.status(404).send(err);
      })
      .then((results) => {
        console.log('success!');
        // db.close();
        res.status(200).send(results);
      });
  },
};