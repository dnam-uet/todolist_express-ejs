const express = require('express');

const connection = require('../db.js');

const rootRouter = express.Router();

rootRouter.get('/', (req, res) => {
    let sql = 'SELECT * FROM task';
    connection.query(sql, (err, results, fields) => {
        if(err) throw err;
        res.render('index', {
            tasks: results
        })
    });
})

rootRouter.post('/', (req, res) => {
    res.render('index');
})

module.exports = rootRouter;