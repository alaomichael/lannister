/* eslint-disable prettier/prettier */
const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');


// create user model
const feeSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    reference: {
        type: String,
        required: true,
    },
    transactionType: {
        type: String,
        required: true,
        default: 'credit',
    },
    category: {
        type: String,
        enum: ['insurance', 'claim', 'withdrawal', 'topup', 'product'],
        trim: true,
        required: [true, 'please provide transaction category'],
        validate: [validator.isAlpha, 'please provide transaction category'],
        default: 'topup',
    },

}, { timestamps: true });


//initialize user model
const Fee = mongoose.model('User', feeSchema);

//export user model
module.exports = Fee;

