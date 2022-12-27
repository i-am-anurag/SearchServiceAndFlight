const express = require('express');
const routers = express.Router();

const v1apiroutes = require('./v1/index');

routers.use('/v1',v1apiroutes);

module.exports = routers;