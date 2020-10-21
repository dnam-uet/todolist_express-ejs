const express = require('express');

const connection = require('../db.js');

const rootRouter = express.Router();

rootRouter.get('/', (req, res) => {
    let sql = 'SELECT * FROM todos';
    connection.query(sql, (err, results, fields) => {
        if(err) throw err;
        let tasks = [];
        let done = [];
        for(let result of results){
            if(result.status === "doing") tasks.push(result);
            else if(result.status === "done") done.push(result);
        }

        res.render('index', {
            tasks: tasks,
            done: done
        })
    });
})

rootRouter.post('/', (req, res) => {
    res.render('index');
})

module.exports = rootRouter;