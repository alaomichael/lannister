const express = require('express');

//initialize  express router
const router = express.Router();

// import insurance controller
const feeController = require('../controllers/feeController');

router
    .route('/fees')
    .post( feeController.storeFeeRate);

router
    .route('/compute-transaction-fee')
    .post( feeController.calculateFee);

  router
  .route('/get-fee-rate')
  .get( feeController.getFeeRate);


module.exports = router;