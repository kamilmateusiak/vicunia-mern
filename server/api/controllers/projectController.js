const Project = require('../models/projectModel');
const User = require('../models/userModel');
const Tracker = require('../models/trackerModel');
const Promise = require('bluebird');
const _ = require('lodash');

exports.getAllProjects = (req, res, next) => {
  Project.find({})
    .then((projects) => {
      res.json(projects);
    }, (err) => {
      next(err);
    });
};

exports.addProject = (req, res, next) => {
  const newProject = {
    name: req.body.name,
  };

  Project.create(newProject)
    .then((project) => {
      res.json(project);
    }, (err) => {
      next(err);
    });
};

exports.getProject = (req, res, next) => {
  Project.findOne({ url_part: req.params.urlpart })
    .populate('team', 'email name')
    .lean()
    .then((project) => {
      return Promise.map(project.team, (user) => {
        return Tracker
          .where({ endDate: { $ne: null }, user: user._id, project: project._id })
          .find()
          .then((events) => {
            user.trackerEvents = events;
          });
      }, { concurrency: 10 })
      .then(() => {
        res.status(200).json(project);
      });
    })
    .catch((err) => {
      next(err);
    });
};

exports.addUserToProject = (req, res, next) => {
  const projectId = req.params.id;
  const teamMemberId = req.body.team;

  Project.findByIdAndUpdate(projectId, { $addToSet: { team: teamMemberId } }, { new: true })
    .then((project) => {
      return User.findByIdAndUpdate(teamMemberId, { $addToSet: { projects: projectId } }, { new: true })
        .then(() => {
          res.json(project);
        });
    })
    .catch((err) => {
      next(err);
    });
};
