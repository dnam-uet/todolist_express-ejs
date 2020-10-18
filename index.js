const express = require('express');
const bodyParser = require('body-parser');

const addRouter = require('./routes/addRoute.js');
const rootRouter = require('./routes/rootRouter.js');

const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


app.use('/', rootRouter);

// Post route for adding new task
app.use('/addtask', addRouter);


app.listen(3000, () => {
    console.log('Listening on port 3000 ...');
})