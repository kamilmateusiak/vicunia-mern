const router = require('express').Router();
const controller = require('../controllers/trackerController');

router.route('/')
  .post(controller.post);

module.exports = router;
