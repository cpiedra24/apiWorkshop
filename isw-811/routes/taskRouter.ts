'use strict'

var express = require('express');
var taskController = require('../controllers/taskController');
var api = express.Router();

var md_auth = require('../middlewares/authenticated');
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir : './uploads/artists'});

//rutas de express
api.get('/task',md_auth.ensureAuth,taskController.getArtist);

api.post('/task',md_auth.ensureAuth,taskController.saveArtist);

api.put('/task/:id',md_auth.ensureAuth,taskController.updateArtist);

api.delete('/task/:id',md_auth.ensureAuth,taskController.deleteArtist);

//exporta las rutas
module.exports = api;