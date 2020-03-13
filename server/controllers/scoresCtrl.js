const catsStore = require('../stores/catsStore');

async function getAllScores(req, res) {
  const {
    query: { count },
  } = req;
  const data = await catsStore.getScores(count);
  res.send(data);
}

async function addPoints(req, res) {
  const { winCatId, lostCatId } = req.body;
  const point = await catsStore.matchScores(winCatId, lostCatId);
  res.json(point);
}

module.exports = { getAllScores, addPoints };
