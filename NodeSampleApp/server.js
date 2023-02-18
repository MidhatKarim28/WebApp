var express = require('express');
const client = require('./connection.js')
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const index = require('./routes/index')
const login = require('./routes/login')
const logout = require('./routes/logout')
const signup = require('./routes/signup')
const verifylogin = require('./routes/verifylogin')

app.use('/',index)
app.use('/login',login)
app.use('/logout',logout)
app.use('/signup',signup)
app.use('/verifylogin',verifylogin)

client.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the DB');
  });

app.listen(8000, function () {
    console.log('Listening to Port 8000');
});