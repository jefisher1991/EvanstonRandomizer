// var path = require("path");


// module.exports = function(app, passport) {
// 	app.get('/signup', function(req, res) {
// 		res.render('Login');
// 	});

// 	app.get('/signin', function(req, res) {
// 		res.render('signin');
// 	});

// 	app.get('/logout', function(req, res) {
// 		req.session.destroy(function(err) {
// 			res.redirect('/');
// 		})
// 	});

// 	app.post('/main', passport.authenticate('local-signup', {
// 		successRedirect: './Game.js',
// 		failureRedirect: '/'
// 	}));

// 	app.post('/main', passport.authenticate('local-signin', {
// 			successRedirect: './Game.js',
// 			failureRedirect: '/'
// 		}
// 	));

// 	function isLoggedIn(req, res, next) {
// 		if (req.isAuthenticated())
// 			return next();
// 		res.redirect('./Game.js');
// 	}
// };
