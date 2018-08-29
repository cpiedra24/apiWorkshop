'use strict'

var fs = require('fs'); //modulo de file system
var path = require('path'); // acceder a rutas concretas
var taskModel = require('../models/taskModel');

//Metodo para guardar una tarea a la base de datos de mongo..
 
    function saveTask(req, res) {
        var task = new taskModel(); //se genera s tareas
        var params = req.body;
        console.log(params);
        task.title = params.title;
        task.details = params.details;
        console.log(task);
    
        task.save((err, taskStored) => { //se mandan los parametros
            if (err) {
                res.status(500).send({
                    message: 'Error al guardar la tarea'
                });
            } else {
                if (!taskStored) {
                    res.status(404).send({
                        message: 'La tarea no ha  sido guardado'
                    });
                } else {
                    res.status(201).send({
                        artist: taskStored
                    });
                }
            }
        });
    
    }
    
    module.exports = {
        saveTask
    };