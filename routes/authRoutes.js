var path = require("path");

module.exports = function(app, passport) {
	app.get('/signup', function(req, res) {
		res.render('Login');
	});

	app.get('/signin', function(req, res) {
		res.render('signin');
	});

	app.get('/logout', function(req, res) {
		req.session.destroy(function(err) {
			res.redirect('/');
		})
	});

	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/reactIndex.html',
		failureRedirect: '/signup'
	}));

	app.post('/signin', passport.authenticate('local-signin', {
			successRedirect: '/',
			failureRedirect: '/signin'
		}
	));

	function isLoggedIn(req, res, next) {
		if (req.isAuthenticated())
			return next();
		res.redirect('/');
	}
};
