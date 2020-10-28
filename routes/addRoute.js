const express = require('express');
const shortid = require('shortid');

const connection = require('../db.js')


const addRouter = express.Router();

addRouter.post('/', (req, res) => {
    const newTask = req.body.newTask;
    let id = shortid.generate();
    const obj = {
        id: id,
        title: newTask,
        completed: false
    }
    let sql = 'INSERT INTO todos SET id = ?, task = ?, status="doing"';

    if(newTask !== '' && newTask != null){
        // Add the new task from the post route into the database
        connection.query(sql,[id, newTask], (err, results, fields) => {
            if(err) throw err;
            res.send(obj)
        })
    }
    // After adding to the array go back to the root route
    // res.redirect('/');
})

module.exports = addRouter;