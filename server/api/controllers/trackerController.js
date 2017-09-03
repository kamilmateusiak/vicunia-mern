const Tracker = require('../models/trackerModel');
const logger = require('../../logger');

exports.post = (req, res, next) => {
  const newTrackerEvent = req.body;

  Tracker.create(newTrackerEvent)
    .then((data) => {
      res.status(200).json(data);
    }, (err) => {
      logger.error(err.message);
      next(err);
    });
};

exports.get = (req, res, next) => {
  Tracker.where({ endDate: null }).findOne()
    .then((data) => {
      res.status(200).json(data);
    }, (err) => {
      logger.error(err.message);
      next(err);
    });
};

exports.patch = (req, res, next) => {
  const newData = {
    description: req.body.description,
    endDate: new Date(req.body.endDate),
  };

  Tracker.findByIdAndUpdate(req.body._id, newData)
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    }, (err) => {
      logger.error(err.message);
      next(err);
    });
};
