const router = require('express').Router();
const controller = require('../controllers/projectController');

router.route('/')
  .get(controller.get);

module.exports = router;
