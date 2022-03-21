/* eslint-disable prettier/prettier */
const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const mongoose = require('mongoose');
const http = require('https');
const superagent = require('superagent');
const axios = require('axios');
// import fs
const fs = require('fs');
//import  fee  model
const Fee = require('../models/feeModel');

  // Convert time from milliseconds to minute
  const convertMillisecondsToMinute = async(ms) => {
    return ms / 60000;
};

const calculateDurationOfCurrentPeriodBalance = async(
    periodBalance,
    costPerMin
) => {
    let minuteAvailable = 0;
    minuteAvailable =  (periodBalance / costPerMin);
    return minuteAvailable;
};

const getTheCurrentWeek = () => {
let	currentDate = new Date();
let	startDate = new Date(currentDate.getFullYear(), 0, 1);
let currentWeek;
	let days = Math.floor((currentDate - startDate) /
		(24 * 60 * 60 * 1000));
		
	let weekNumber = Math.ceil(
		(currentDate.getDay() + 1 + days) / 7);

	// Display the calculated result	
	console.log("Week number of " + currentDate + " is : " + weekNumber);

    // console.log("Week number of " + currentDate + " is : " + currentDate.getWeek());
    currentWeek = weekNumber;

    return currentWeek;
};

const getTheCurrentDate = () => {
    let	currentDate = new Date();
    let	startDate = new Date(currentDate.getFullYear(), 0, 1);
    let todayDate;
             // Display the calculated result	
        console.log("Today date is " + currentDate.getDay());
    
        // console.log("Week number of " + currentDate + " is : " + currentDate.getWeek());
        todayDate = currentDate.getDay();
    
        return todayDate;
    };


//store fee
exports.storeFeeRate = async(req, res, next) => {
    try {
        
//javascript multiple case switch statement
var color = "yellow";
var darkOrLight="";
switch(color) {
    case "yellow":case "pink":case "orange":
        darkOrLight = "Light";
        break;
    case "blue":case "purple":case "brown":
        darkOrLight = "Dark";
        break;
    default:
        darkOrLight = "Unknown";
}

console.log("The color is:", color);
//darkOrLight="Light"

            let updatedDataAfterActivation = {
           
                currency,
                ...req.body,
            };

            let userToUpdate = await Fee.findByIdAndUpdate(
                user_id,
                updatedDataAfterActivation, {
                    new: true,
                    runValidators: true,
                }
            );

            //check if user exists
            if (!userToUpdate) {
                throw createError(404, 'User does not exist');
            }


            //send user to client
            res.status(200).json({
                status: 'success',
                data: {
                    userToUpdate,
                    updatedDataAfterActivation,
                },
            });
        
    } catch (err) {
        if (err instanceof mongoose.CastError) {
            console.log('err :', err);
            return next(
                createError(400, 'Invalid user ID or your account is deactivated or there is a missing parameter ,though your balance is more than #500.')
            );
        }
        next(err);
    }
};

//calculate fee
exports.calculateFee = async(req, res, next) => {
    try {
        
//javascript multiple case switch statement
var color = "yellow";
var darkOrLight="";
switch(color) {
    case "yellow":case "pink":case "orange":
        darkOrLight = "Light calculate fee";
        break;
    case "blue":case "purple":case "brown":
        darkOrLight = "Dark calculate fee";
        break;
    default:
        darkOrLight = "Unknown";
}

console.log("The color is:", color);
//darkOrLight="Light"

            let updatedDataAfterActivation = {
           
                currency,
                ...req.body,
            };

            let userToUpdate = await Fee.findByIdAndUpdate(
                user_id,
                updatedDataAfterActivation, {
                    new: true,
                    runValidators: true,
                }
            );

            //check if user exists
            if (!userToUpdate) {
                throw createError(404, 'User does not exist');
            }


            //send user to client
            res.status(200).json({
                status: 'success',
                data: {
                    userToUpdate,
                    updatedDataAfterActivation,
                },
            });
        
    } catch (err) {
        if (err instanceof mongoose.CastError) {
            console.log('err :', err);
            return next(
                createError(400, 'Invalid user ID or your account is deactivated or there is a missing parameter ,though your balance is more than #500.')
            );
        }
        next(err);
    }
};

//get fee rate
exports.getFeeRate = async(req, res, next) => {
    try {
        
//javascript multiple case switch statement
var color = "yellow";
var darkOrLight="";
switch(color) {
    case "yellow":case "pink":case "orange":
        darkOrLight = "Light Fee Rate";
        break;
    case "blue":case "purple":case "brown":
        darkOrLight = "Dark Fee Rate";
        break;
    default:
        darkOrLight = "Unknown";
}

console.log("The color is:", color);
//darkOrLight="Light"

            let updatedDataAfterActivation = {
           
                currency,
                ...req.body,
            };

            let userToUpdate = await Fee.findByIdAndUpdate(
                user_id,
                updatedDataAfterActivation, {
                    new: true,
                    runValidators: true,
                }
            );

            //check if user exists
            if (!userToUpdate) {
                throw createError(404, 'User does not exist');
            }


            //send user to client
            res.status(200).json({
                status: 'success',
                data: {
                    userToUpdate,
                    updatedDataAfterActivation,
                },
            });
        
    } catch (err) {
        if (err instanceof mongoose.CastError) {
            console.log('err :', err);
            return next(
                createError(400, 'Invalid user ID or your account is deactivated or there is a missing parameter ,though your balance is more than #500.')
            );
        }
        next(err);
    }
};

