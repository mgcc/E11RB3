const express = require('express');
const app = express();

const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost/Movies';
mongoose.Promise = global.Promise;
mongoose.connect(DB_URL);

// for CORS
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  res.setHeader('Cache-Control', 'no-cache');
  next();
});

// Setup Mongoose models
require('./models/index');

// Setup Routes
require('./routes/index')(app);

// Homepage message
app.get('/', (req, res) => {
  res.send('API is working!');
});

app.listen(3001, (err) => {
  if (err) { console.log(err); }
  else { console.log('\nMovie server is running at http://localhost:3001'); }
});

