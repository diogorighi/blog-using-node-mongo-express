var express = require('express');
var router = express.Router();

var Post = require('../../models/post'); // define Post Scheme

/* GET users listing. */
router.get('/:id', function(req, res, next) {

	// Page Route 
	var page = req._parsedOriginalUrl.path;

	// Retrieve app global settings
	var settings = req.app.get('settings');

	Post.findById(req.params.id, function(error, post) {
    	if (error) {
			res.send(error);
		} 

		res.render('web/post', { settings: settings, page: page, post: post });
	});
});

module.exports = router;
