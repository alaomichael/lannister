/* eslint-disable prettier/prettier */
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const createError = require('http-errors');
const path = require('path');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
// import node-cron for schedulling
const cron = require('node-cron');
// import user model
const Fee = require('./models/feeModel');

require("dotenv").config();
const fs = require("fs");
const axios = require('axios');
const superagent = require('superagent');
//initialize express
const app = express();
//implement cors
app.use(cors());

app.options('*', cors());

app.enable('trust proxy');

const request = require('request');
const bodyParser = require('body-parser');
const _ = require('lodash');
//  "public" off of current is root
app.use(express.static(path.join(__dirname, 'public/')));

//import admin controllers
const fee = require('./routes/feeRoute');

//set security Http headers
app.use(helmet());

//development loggin
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// limit req from same api
const limiter = rateLimit({
    max: 1000000,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests  from this IP, please try again in an hour!',
});
app.use('/api', limiter);

//Data sanitization against noSQL query injection
app.use(mongoSanitize());

//Data sanitization against XSS
app.use(xss());

//prevent parameter pollution
app.use(hpp({}));
// let’s you use the cookieParser in application
app.use(cookieParser());
//body parser, reading data from body into req.body
app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin,x-access-token, X-Requested-With, Content-Type, Accept'
    );
    res.header('Accept', 'application/json, text/plain,application/x-www-form-urlencoded,application/form-data , */*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Methods", "POST, GET,DELETE,UPDATE,PATCH");
    // res.headers('authorization', 'Bearer' + ' ' + req.cookies.jwt);
    res.header('authorization', 'Bearer' + ' ' + req.cookies.jwt);
    res.header('x-access-token', 'Bearer' + ' ' + req.cookies.jwt);
    res.header('Authorization', 'Bearer' + ' ' + req.cookies.jwt);
    next();
});

//routes middlewares
app.use('/', fee);

// checking insurance status every minute with node-cron
// cron.schedule('2 * * * *', periodController.getFeeRate);

// Home page
app.get('/', (req, res) => {
    res.render('Welcome to Lannister Pay.') ;
});

app.all('*', (req, res, next) => {
    // res.status(404).sendFile(__dirname + '/public/mylocation.html');
    next(createError(404, ` can't find ${req.originalUrl} on server!`));
});

//error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message,
            loggedError: err,
        },
    });
});

//export express
module.exports = app;