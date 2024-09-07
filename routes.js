const router = require('express').Router();

const authController = require('./controllers/authController')
const homeController = require('./controllers/homeController');

router.use(homeController);
router.use(authController);

module.exports = router;