/* eslint-disable prettier/prettier */
const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');


// create recent user schema
const rate = new mongoose.Schema({
  // {FEE-ID} {FEE-CURRENCY} {FEE-LOCALE} {FEE-ENTITY}({ENTITY-PROPERTY}) : APPLY {FEE-TYPE} {FEE-VALUE}
    feeId: {
        type: String,
        required: [true, 'please provide fee Id'],
    },
    feeCurrency: {
        type: String,
        required: [true, 'please provide fee currency'],
    },
    feeLocale: {
        type: String,
        required: [true, 'please provide feeLocale'],
    },
     feeEntity: {
        type: String,
        required: [true, 'please provide feeEntity'],
    },
    entityProperty: {
        type: String,
        required: [true, 'please provide entityProperty'],
    },
    feeType: {
        type: String,
        required: [true, 'please provide feeType'],
    },
    feeValue: {
        type: Number,
        required: [true, 'please provide feeValue'],
    },

}, { timestamps: true });

// create user model
const feeSchema = new mongoose.Schema({
    rates: [rate]

}, { timestamps: true });


//initialize user model
const Fee = mongoose.model('User', feeSchema);

//export user model
module.exports = Fee;

