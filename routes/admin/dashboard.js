var express = require('express');
var router = express.Router();

var Post = require('../../models/post'); // define Post Scheme

// ----------------------------------------------------------------------------
// JSON DATA - In the future it will be using mongoDB 

var users = require("../../json/users.json");
var user = users[0]; // Get information from the 1st user

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

		res.render('admin/dashboard', { settings: settings, page: page, user: user, posts: posts });
	});	
});


// ---------------------------------------------------------------------------- 
// RESTfull aplication for BLOG


// Show ALL posts
router.get('/blog', function(req, res, next) {
	Post.find( function(error, posts) {
		if (error) {
			res.send(error);
		} 

		res.json(posts);
	});
});

// Show ONE post
router.get('/blog/:id', function(req, res, next) {
	
	Post.findById(req.params.id, function(error, post) {
    	if (error) {
			res.send(error);
		} 

		res.json(post);
	});


});

// ADD a post into database
router.post('/blog', function(req, res, next) {

	//var j = JSON.stringify(req.body);
	//console.log('body: ' + req.body.title);

	var post = new Post({
		author: user.name,
	    title: req.body.title,
	    shortDescription: req.body.shortDescription,
	    description: req.body.description,
	    added: Date.now()
	});

	post.save(function(err, thor) {
		if (err) return console.error(err);
		res.json( {message: 'Post created' } )
	});
	

});

// UPDATE post
router.put('/blog/:id', function(req, res, next) {

	// First find post with ID passed on PUT
	Post.findById(req.body.id, function(error, post) {
		if (error) {
			res.send(error);
		}

		post.author = user.name;
		post.title 	= req.body.title;
		post.shortDescription = req.body.shortDescription;
		post.description = req.body.description;
		post.updated = Date.now();

		// save the bear
		post.save(function(err) {
			if (error) {
				res.send(error);
			}

			res.json({ message: 'Post updated!' });
		});

	});
});


// DELETE post from database
router.delete('/blog/:id', function(req, res, next) {
	
	Post.remove( {_id: req.body.id }, function(error, post) {
		if (error) {
			res.send(error);
		}

		res.json({ message: 'Post deleted' });

	});

});

module.exports = router;
