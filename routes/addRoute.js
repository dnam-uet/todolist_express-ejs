const express = require('express');

const tasks = require('../db.js')

const addRouter = express.Router();

addRouter.post('/', (req, res) => {
    let newTask = req.body.newTask;
    console.log('New Task: ',newTask);

    // Add the new task from the post route into the array
    tasks.push(newTask);
    console.log(tasks);
    // After adding to the array go back to the root route
    res.redirect('/');
})

module.exports = addRouter;