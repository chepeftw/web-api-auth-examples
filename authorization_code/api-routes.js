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
const apiController = require('./controller/apiController');
// Contact routes
// router.route('/rankings')
//     .get(apiController.index);
router.route('/rankings/:isrc')
    .get(apiController.view);
router.route('/rankings_fr/:isrc')
    .get(apiController.viewFr);

// Import contact controller
var surveyController = require('./controller/surveyController');
router.route('/surveys')
    .get(surveyController.index)
    .post(surveyController.new);

router.route('/surveys/:user')
    .get(surveyController.view)
    .delete(surveyController.delete);


// Export API routes
module.exports = router;