const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const users = require('../controllers/users');

router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register));

router.route('/login')
    .get(users.renderLogin)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login)

router.get('/logout', users.logout)

module.exports = router;
=======
const catchAsync = require('../utils/catchAsync')
const User = require('../models/user')
const passport = require('passport')
const users = require('../controllers/users')

router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register))



router.route('/login')
    .get(users.renderlogin)
    .post(passport.authenticate('local', { failureFlash: true, faliureRedirect: '/login' }), users.login)


router.get('/logout', users.logout);

module.exports = router; 
>>>>>>> f489baeb5bf276d55accee7d20a45336a177d8a5
