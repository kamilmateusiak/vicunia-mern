const Tracker = require('../models/trackerModel');

exports.post = (req, res, next) => {
  const newTrackerEvent = req.body;
  console.log(req.body);
  Tracker.create(newTrackerEvent)
    .then((data) => {
        console.log('data', data);
      res.status(200).json(data);
    }, (err) => {
    console.log('err', err)
      next(err)
    })
}
