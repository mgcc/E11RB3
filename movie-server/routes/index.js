const MovieRouter = require('./movie-router');

module.exports = (app) => {
  app.use('/movie', MovieRouter);
}
