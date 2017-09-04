const router = require('express').Router();
const controller = require('../controllers/trackerController');

router.route('/')
  .patch(controller.patch);

router.route('/:userid')
  .get(controller.get)
  .post(controller.post);

router.route('/:userid/all')
  .get(controller.getAllUserEvents);

module.exports = router;
