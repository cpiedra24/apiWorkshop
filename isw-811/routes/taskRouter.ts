'use strict'



var express = require('express');
var TaskController = require('../controllers/taskController');


var api = express.Router();
var multipart = require('connect-multiparty');//permite subir ficheros


api.post('/tasks', TaskController.saveTask);

module.exports = api;