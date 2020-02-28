const router = require('express').Router();
const bcrypt = require('bcryptjs');
const users = require('./auth-model');

router.post('/register', (req, res) => {
	// implement registration
	const hash = bcrypt.hashSync(req.body.password, 8);
	req.body.password = hash;
	users
		.add(req.body)
		.then(result => {
			res.status(201).json(result);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

router.post('/login', (req, res) => {
	// implement login
	const username = req.body.username;
	const password = req.body.password;
	users
		.findBy({username})
		.first()
		.then(user => {
			if (user && bcrypt.compareSync(password, user.password)) {
				req.session.loggedIn = true;
				req.session.username = username;
				res.status(200).json({message: 'Login Success'});
			} else {
				res.status(401).json({message: 'Invalid Username and Password Combo'});
			}
		})
		.catch(error => {
			res.status(500).json({
				error: error,
				message: 'A server error occurred. Please consult your wizard'
			});
		});
});

module.exports = router;
