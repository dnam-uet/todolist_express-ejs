const express = require('express');

const connection = require('../db');

const doneRouter = express.Router();

// doneRouter.post('/', (req, res) => {

//     let sql = 'UPDATE todos SET status="done" WHERE id=?';

//     // Done task
//     if(typeof(req.body.check) === "string") {
//         connection.query(sql, [req.body.check], (err, results, fields)  => {
//             if(err) throw err;
//         });
//     }
//     else {
//         for(let id of req.body.check){
//             connection.query(sql, [id], (err, results, fields)  => {
//                 if(err) throw err;
//             });
//         }
//     }


//     // Redirect
//     res.redirect('/');
// })

module.exports = doneRouter;