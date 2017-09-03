const Tracker = require('../models/trackerModel');
const logger = require('../../logger');

exports.post = (req, res, next) => {
  const newTrackerEvent = req.body;
  newTrackerEvent.user = req.params.userid;

  Tracker.create(newTrackerEvent)
    .then((data) => {
      res.status(200).json(data);
    }, (err) => {
      logger.error(err.message);
      next(err);
    });
};

exports.get = (req, res, next) => {
  Tracker.where({ endDate: null, user: req.params.userid }).findOne()
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

exports.getAllUserEvents = (req, res, next) => {
  var start = new Date();
  start.setHours(0,0,0,0);

  var end = new Date();
  end.setHours(23,59,59,999);
  
  if (typeof req.query.limit !== 'undefined') {
    Tracker.where({
      user: req.params.userid,
      endDate: { $gte: start, $lt: end },
    })
    .find()
    .sort({ endDate: -1 })
    .limit(10)
    .populate('project')
    .then((data) => {
      res.status(200).json(data);
    }, (err) => {
      logger.error(err.message);
      next(err);
    });
  } else {
    Tracker.where({
      user: req.params.userid,
      endDate: { $gte: start, $lt: end },
    })
    .find()
    .sort({ endDate: -1 })
    .populate('project')
    .then((data) => {
      res.status(200).json(data);
    }, (err) => {
      logger.error(err.message);
      next(err);
    });
  }
};
