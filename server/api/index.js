const router = require('express').Router();

require('../middlewares/apiMiddleware')(router);

router.use('/projects', require('./routes/projectRoutes'));
router.use('/tracker', require('./routes/trackerRoutes'));
router.use('/auth', require('./routes/authRoutes'));
router.use('/user', require('./routes/userRoutes'));

module.exports = router;
