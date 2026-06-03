const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const { isLoggedIn, storeReturnTo } = require('../middleware');
const users = require('../controllers/users');

router.get('/profile', isLoggedIn, (req, res) => {
    res.render('users/profile');
});

router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register))

router.route('/login')
    .get(users.renderLogin)
    .post(storeReturnTo, passport.authenticate('local',{failureFlash: true,failureRedirect: '/login'}), users.login)

router.get('/logout', users.logout);

module.exports = router;