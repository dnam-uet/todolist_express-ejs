const express = require('express');

const connection = require('../db.js');

const removeRouter = express.Router();

removeRouter.post('/', (req, res) => {

    let sql = 'DELETE FROM todos WHERE id=?';


    if(typeof(req.body.check) === "string") {
        connection.query(sql, [req.body.check], (err, results, fields)  => {
            if(err) throw err;
        });
    }
    else {
        for(let id of req.body.check){
            connection.query(sql, [id], (err, results, fields)  => {
                if(err) throw err;
            });
        }
    }

    res.redirect('/')
})

module.exports = removeRouter;