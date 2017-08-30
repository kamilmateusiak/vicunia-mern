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
