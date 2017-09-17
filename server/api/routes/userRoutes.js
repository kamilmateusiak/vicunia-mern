const router = require('express').Router();
const controller = require('../controllers/userController');

router.route('/upload-avatar')
  .post(controller.uploadFile);


module.exports = router;
