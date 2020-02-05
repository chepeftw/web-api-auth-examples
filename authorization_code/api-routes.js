// Filename: api-routes.js
// Initialize express router
const router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to API crafted with love!'
    });
});

// Import contact controller
const apiController = require('./apiController');
// Contact routes
// router.route('/rankings')
//     .get(apiController.index);
router.route('/rankings/:isrc')
    .get(apiController.view);
router.route('/rankings_fr/:isrc')
    .get(apiController.viewFr);
// Export API routes
module.exports = router;