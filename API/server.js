'use strict';

var express = require('express')
var morgan = require('morgan')
var path = require('path')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

// Require configuration file defined in app/Config.js
var config = require('./app/Config')

// Connect to database
mongoose.connect(config.DB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connection DB');
});

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// Sends static files  from the public path directory
app.use(express.static(path.join(__dirname, '/public')))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

var userRoutes = require('./app/Routes')

//  Use routes defined in Route.js and prefix it with api
app.use('/api', userRoutes)

app.use(function (req, res, next) {
    // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', `http://${HOST}:${PORT}`)
    // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    // Pass to next layer of middleware
  next()
})
// Server index.html page when request to the root is made
app.get('/', function (req, res, next) {
  res.sendfile('./public/index.html')
})