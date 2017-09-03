const _ = require('lodash');
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
  const start = new Date();
  start.setUTCHours(0, 0, 0, 0);
  const end = new Date();
  end.setUTCHours(23, 59, 59, 999);

  const limit = Number(req.query.limit) || 9999;

  Tracker.where({
    user: req.params.userid,
    endDate: { $gte: start, $lt: end },
  })
  .find()
  .sort({ endDate: -1 })
  .populate('project')
  .then((trackerEvents) => {
    let uptimeSum = 0;
    trackerEvents.forEach((event) => {
      if (event.endDate !== null) {
        uptimeSum += new Date(event.endDate).getTime() - new Date(event.startDate).getTime();
      }
    });

    const uptimeSumHours = Math.floor(uptimeSum / (3600 * 1000));
    uptimeSum -= uptimeSumHours * 3600 * 1000;
    const uptimeSumMinutes = Math.floor(uptimeSum / (60 * 1000));

    const uptimeSumToday = {
      hours: uptimeSumHours < 10 ? `0${uptimeSumHours}` : uptimeSumHours,
      minutes: uptimeSumMinutes < 10 ? `0${uptimeSumMinutes}` : uptimeSumMinutes,
    };

    const events = _.take(trackerEvents, limit);

    const data = {
      trackerEvents: events,
      uptimeSumToday,
    };
    res.status(200).json(data);
  }, (err) => {
    logger.error(err.message);
    next(err);
  });
};
