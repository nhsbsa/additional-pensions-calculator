// External dependencies
const express = require('express');
const router = express.Router();

// =======================================
// Version Routes Files Below
// =======================================

router.use('/v1', require('./views/v1/_routes'));

module.exports = router;
