const express = require('express');
const { bulkRegister } = require('../controllers/user');

const Router = express.Router();

Router.route('/bulk-register').post(bulkRegister)

module.exports = Router;