'use strict';

const express = require('express');
const Controller = require('../../controllers/TestController');
const Router = express.Router();

Router.route('/').get(Controller.test);

module.exports = Router;
