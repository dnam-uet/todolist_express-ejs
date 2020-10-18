const express = require('express');

const tasks = require('../db.js');

const rootRouter = express.Router();

rootRouter.get('/', (req, res) => {
    // render the ejs and display added task, task(index.js) = task(array)
    res.render('index', {tasks: tasks});
})

rootRouter.post('/', (req, res) => {
    res.render('index');
})

module.exports = rootRouter;