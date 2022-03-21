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

 
//store fee
exports.storeFeeRate = async(req, res, next) => {
    try {
        console.log("The request payload:", req.body);
        let configuration = req.body.FeeConfigurationSpec;
        let arr = configuration.split('\n');
        console.log("The splitted request payload:", arr);

        let arr2 = configuration.split(' '); 
        console.log("The splitted request payload:", arr2);

            let updatedDataAfterActivation = {
                ...req.body,
            };
let id = req.params.id;
            let userToUpdate = await Fee.findByIdAndUpdate(
                id,
                updatedDataAfterActivation, {
                    new: true,
                    runValidators: true,
                }
            );

            //check if user exists
            if (!userToUpdate) {
                throw createError(404, 'User Account does not exist');
            }


            //send user to client
            res.status(200).json({
                status: 'ok',
               });
        
    } catch (err) {
        if (err instanceof mongoose.CastError) {
            console.log('err :', err);
            return next(
                createError(400, 'Invalid rate setup configuration.')
            );
        }
        next(err);
    }
};

//calculate fee
exports.calculateFee = async(req, res, next) => {
    try {
                /**
            LNPY1221 NGN LOCL CREDIT-CARD(*) : APPLY PERC 1.4
            LNPY1222 NGN INTL CREDIT-CARD(MASTERCARD) : APPLY PERC 3.8
            LNPY1223 NGN INTL CREDIT-CARD(*) : APPLY PERC 5.8
            LNPY1224 NGN LOCL USSD(MTN) : APPLY FLAT_PERC 20:0.5
            LNPY1225 NGN LOCL USSD(*) : APPLY FLAT_PERC 20:0.5
            */

            /*
            {
    "ID": 91203,
    "Amount": 5000,
    "Currency": "NGN",
    "CurrencyCountry": "NG",
    "Customer": {
        "ID": 2211232,
        "EmailAddress": "anonimized29900@anon.io",
        "FullName": "Abel Eden",
        "BearsFee": true
    },
    "PaymentEntity": {
        "ID": 2203454,
        "Issuer": "GTBANK",
        "Brand": "MASTERCARD",
        "Number": "530191******2903",
        "SixID": 530191,
        "Type": "CREDIT-CARD",
        "Country": "NG"
    }
}
            
            */

//javascript multiple case switch statement
var ID = "LNPY0222";
var rate="";
switch(color) {
    case "yellow":case "pink":case "orange":
        rate = "APPLY PERC 1.4";
        break;
    case "blue":case "purple":case "brown":
        rate =  "APPLY PERC 1.4";
        break;
    default:
        rate = "Unknown";
}

console.log("The color is:", rate);
//darkOrLight="Light"


            //send user to client
            res.status(200).json({
              
                    AppliedFeeID: "LNPY0222",
                    AppliedFeeValue: 230,
                    ChargeAmount: 5230,
                    SettlementAmount: 5000
        
            });
        
    } catch (err) {
        if (err instanceof mongoose.CastError) {
            console.log('err :', err);
            return next(
                createError(400, 'none of the fee configurations is applicable to a transaction,please try again')
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
                status: 'ok',
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

