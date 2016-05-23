var express = require('express');
var router = express.Router();

var Post = require('../../models/post'); // define Post Scheme

/* GET users listing. */
router.get('/', function(req, res, next) {
	
	// Page Route 
	var page = req._parsedOriginalUrl.path;

	// Retrieve app global settings
	var settings = req.app.get('settings');

	// Retrieve all blog posts from database
	Post.find( function(error, posts) {
		if (error) {
			res.send(error);
		}
		res.render('web/blog', { settings: settings, page: page, posts: posts });
	});


	
});

module.exports = router;
