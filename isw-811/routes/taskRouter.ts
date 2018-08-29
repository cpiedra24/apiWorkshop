'use strict'



var express = require('express');
var TaskController = require('../controllers/taskController');


var api = express.Router();
var md_auth = require('../middlewares/authenticated');//cargar el middleware de autenticacion
var multipart = require('connect-multiparty');//permite subir ficheros

// api.get('/probando-controlador',md_auth.ensureAuth, TaskController.pruebas);

api.post('/tasks', TaskController.saveTask);

// api.post('/login', TaskController.loginUser);s

// api.put("/update-user/:id",md_auth.ensureAuth,TaskController.updateUser);



module.exports = api;