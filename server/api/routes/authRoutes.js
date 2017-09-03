const router = require('express').Router();
const controller = require('../controllers/authController');

router.route('/login')
  .post(controller.postLogin);

router.route('/signup')
  .post(controller.postSignUp);

module.exports = router;
