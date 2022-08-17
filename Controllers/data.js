const { Mongoose } = require('mongoose');
const sampledata = require('../Models/sampledata');
exports.getData = (req, res) => {
  sampledata.find((err, docs) => {
    if (err) {
      res.send({
        status: 400,
        message: 'Bad request',
      });
    }
    res.send({
      docs,
    });
  });
};
