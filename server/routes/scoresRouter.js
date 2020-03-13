const router = require('express').Router();
const scoresController = require('../controllers/scoresCtrl');

router.get('/', scoresController.getAllScores);
router.post('/', scoresController.addPoints);

module.exports = router;
