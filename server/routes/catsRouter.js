const router = require('express').Router();
const catsController = require('../controllers/catsCtrl');

router.get('/', catsController.getCats);

module.exports = router;
