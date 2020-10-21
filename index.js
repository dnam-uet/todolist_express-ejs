const express = require('express');
const bodyParser = require('body-parser');

const addRouter = require('./routes/addRoute.js');
const rootRouter = require('./routes/rootRouter.js');
const removeRouter = require('./routes/removeRouter.js');
const doneRouter = require('./routes/doneRouter');

const app = express();



// Use body-parser => req.body
app.use(bodyParser.urlencoded({extended: true}));

// Use static file (CSs,img,..)
app.use(express.static("public"));

// Use template engine
app.set('view engine', 'ejs');




// Root
app.use('/', rootRouter);

// Add task
app.use('/addtask', addRouter);

// Remove task
app.use('/removetask', removeRouter);

// Done task
app.use('/donetask', doneRouter);






app.listen(3000, () => {
    console.log('Listening on port 3000 ...');
})