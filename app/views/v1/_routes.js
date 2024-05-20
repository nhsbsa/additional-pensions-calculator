// External dependencies
const e = require('express');
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// ========================================================================
// MAIN ADDITIONAL PENSION CALCULATOR JOURNEY
// ========================================================================


// Start page
router.post(/start/, (req, res) => {
    res.redirect('date-of-birth')
});

// What is your date of birth?
router.post(/date-of-birth/, (req, res) => {
    res.redirect('previous-contracts')
});

// Previous contracts Yes/No question
router.post(/previous-contract/, (req, res) => {

    const contract = req.session.data['contract']

    if (contract == 'yes') {
        res.redirect('previous-contracts-amount')
    } else {
        res.redirect('additional-pension-amount')

    }
});

// Value of previous contracts?
router.post(/previous-contracts-amount/, (req, res) => {
    res.redirect('additional-pension-amount')
});

// How much additional pension would you like?
router.post(/additional-pension-amount/, (req, res) => {
    res.redirect('dependant-cover')
});

// Dependant cover?
router.post(/dependant-cover/, (req, res) => {
    res.redirect('payment-option')
});

// Lump Sum or Instalments?
router.post(/payment-option/, (req, res) => {

    const payment = req.session.data['payment']

    if (payment == 'lumpsum') {
        res.redirect('result')
    } else {
        res.redirect('instalments')

    }
});

// How many instalments?
router.post(/instalments/, (req, res) => {
    res.redirect('result')
});

module.exports = router;
