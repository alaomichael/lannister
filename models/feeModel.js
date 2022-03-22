/* eslint-disable prettier/prettier */
const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');


// create recent user schema
const rate = new mongoose.Schema({
    FeeConfigurationSpec: {
        type: String,
        required: [false, 'please provide fee config'],
    },
  // {FEE-ID} {FEE-CURRENCY} {FEE-LOCALE} {FEE-ENTITY}({ENTITY-PROPERTY}) : APPLY {FEE-TYPE} {FEE-VALUE}
    feeId: {
        type: String,
        required: [false, 'please provide fee Id'],
    },
    feeCurrency: {
        type: String,
        required: [false, 'please provide fee currency'],
    },
    feeLocale: {
        type: String,
        required: [false, 'please provide feeLocale'],
    },
     feeEntity: {
        type: String,
        required: [false, 'please provide feeEntity'],
    },
    entityProperty: {
        type: String,
        required: [false, 'please provide entityProperty'],
    },
    feeType: {
        type: String,
        required: [false, 'please provide feeType'],
    },
    feeValue: {
        type: Number,
        required: [false, 'please provide feeValue'],
    },

}, { timestamps: true });

// create user model
const feeSchema = new mongoose.Schema({
    // rates: [rate],
    FeeConfigurationSpec: {
        type: Object,
        required: [false, 'please provide fee configuration specification'],
    },

}, { timestamps: true });


//initialize user model
const Fee = mongoose.model('Fee', feeSchema);

//export user model
module.exports = Fee;

