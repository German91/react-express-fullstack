'use strict';

module.exports = function (app) {
  // Routes
  const testRoutes = require('./tests/routes');

  app.use('/api/tests', testRoutes);
}
