// Dependencies
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const helmet = require('helmet');
const compression = require('compression');

// Config
const app = express();

// Database
require('./config/db');

// Routes
require('./app/routes')(app);

app.disable('x-powered-by');
app.use(logger("dev"));
app.use(helmet.xssFilter());
app.use(helmet.noCache());
app.use(helmet.noSniff());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ 'extended': false }));
app.use(cookieParser());
app.use(methodOverride());
app.use(compression());

// Webpack Dev Server Configuration
if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

// Connection
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log('Listening'));
