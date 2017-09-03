const router = require('express').Router();
const controller = require('../controllers/authController');

router.route('/login')
  .post(controller.post);

module.exports = router;
