const Project = require('../models/projectModel');

exports.get = (req, res, next) => {
  Project.find({})
    .then((projects) => {
      res.json(projects);
    }, (err) => {
      next(err);
    });
};
