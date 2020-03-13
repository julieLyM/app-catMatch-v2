const catsRouter = require('./routes/catsRouter');
const scoresRouter = require('./routes/scoresRouter');

function routes(app) {
  app.use('/api/v1/cats/', catsRouter);
  app.use('/api/v1/scores/', scoresRouter);
}

module.exports = routes;
