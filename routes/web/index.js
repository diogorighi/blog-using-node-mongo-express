var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	// Page Route 
	var page = req._parsedOriginalUrl.path;
	
	// Retrieve app global settings
	var settings = req.app.get('settings');

  	res.render('web/index', { settings: settings, page: page } );

});

module.exports = router;
