const router = require('express').Router();
const controller = require('../controllers/projectController');

router.route('/')
  .get(controller.getAllProjects)
  .post(controller.addProject);

router.route('/:id')
  .patch(controller.addUserToProject);

router.route('/:urlpart')
  .get(controller.getProject);

module.exports = router;
