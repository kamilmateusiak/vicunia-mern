const router = require('express').Router();
const controller = require('../controllers/trackerController');

router.route('/')
  .get(controller.get)
  .post(controller.post)
  .patch(controller.patch);

module.exports = router;
