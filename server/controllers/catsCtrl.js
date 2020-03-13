const catsStore = require('../stores/catsStore');

async function getCats(req, res) {
  const {
    query: { count },
  } = req;
  const data = await catsStore.getCat(count);
  res.json(data);
}

module.exports = { getCats };
