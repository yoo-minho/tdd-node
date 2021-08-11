const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const db = require('./config/database');

/**
 *
 * Model - (Service) Controller - Route
 * Model - Service - (Route) Controller
 */
const userModel = require('./models/user')(db); //Model, Data Access
const userController = require('./api/user/user.controller')(userModel); //Controller, Service, 비즈니스로직
const userRoute = require('./api/user')(userController); //Route, Route Controller

if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/users', userRoute);

module.exports = app;