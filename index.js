const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const tasks = ['buy socks', 'practice with nodejs'];

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'example_express'
})

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });
// connection.end();


app.get('/', (req, res) => {
    // render the ejs and display added task, task(index.js) = task(array)
    res.render('index', {tasks: tasks});
})

app.post('/', (req, res) => {
    res.render('index');
})

// Post route for adding new task
app.post('/addtask', (req, res) => {
    let newTask = req.body.newTask;
    console.log('New Task: ',newTask);

    // Add the new task from the post route into the array
    tasks.push(newTask);
    console.log(tasks);
    // After adding to the array go back to the root route
    res.redirect('/');
})

app.listen(3000, () => {
    console.log('Listening on port 3000 ...');
})