// External dependencies
const e = require('express');
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// ========================================================================
// CREATE NEW CASE
// ========================================================================


// Deceased person's details
router.post(/create-new-case/, (req, res) => {

    req.session.data['create-new-case-section'] = 'complete'
    res.redirect('assign-case')

})

module.exports = router;
