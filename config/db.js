'use strict';

const mongoose = require('mongoose');
const config = require('./env');

mongoose.connect(config.MONGO_URI);

mongoose.connection.on('open', (ref) => {
  console.log('Connected to mongo server');
});

mongoose.connection.on('error', (error) => {
  console.log('Could not connect to mongo server');
});
