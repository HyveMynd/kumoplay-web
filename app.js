var express = require('express');
var routes = require('./routes');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var app = express();

// Configuration

app.use(morgan('dev'));
app.use(bodyParser());
app.use(session());
app.use(methodOverride());
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');


// Routes
var port = 3000;
app.route('/')
    .get(routes.index);
app.listen(port, function(){
  console.log("Magic on port: ", port);
});
