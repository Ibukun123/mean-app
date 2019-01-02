const express = require('express');
const app = express();
const todoController = require('./controller/todoController');

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//init controller
todoController(app);

//listen to port
app.listen(3000);
console.log('Server is working');