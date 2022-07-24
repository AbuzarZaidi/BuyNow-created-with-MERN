const express=require('express');
const GoogleStrategy=require("passport-google-oauth20").Strategy;
const passport=require("passport")
const usersController=require('../controllers/usersControllers')
const router=express.Router();
router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: process.env.CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);
router.post('/signup',usersController.signup);
router.post('/login', usersController.login);

module.exports = router;