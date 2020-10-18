const express = require('express');
const shortid = require('shortid');

const connection = require('../db.js')

const addRouter = express.Router();

addRouter.post('/', (req, res) => {
    let newTask = req.body.newTask;
    let id = shortid.generate();

    // Add the new task from the post route into the database
    connection.query('INSERT INTO task SET id = ?, main = ?',[id, newTask], (err, results, fields) => {
        if(err) throw err;
    })
    // After adding to the array go back to the root route
    res.redirect('/');
})

module.exports = addRouter;