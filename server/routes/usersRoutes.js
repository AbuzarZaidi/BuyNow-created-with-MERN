const express=require('express');
// const GoogleStrategy=require("passport-google-oauth20").Strategy;
const passport = require("passport");
const usersController=require('../controllers/usersControllers')
const router=express.Router();
const CLIENT_URL = "http://localhost:3000/";

router.get("/login/success", (req, res) => {
 
  if (req) {
    // console.log(req.json())
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
        cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }),(req, res) => {
 console.log('/google')
//  console.log(req)
});

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: CLIENT_URL,
  }),(req, res) => {
    console.log('/google/callback')
    // console.log(req)
   }
);

router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/login/failed",
  })
);

router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.post('/signup',usersController.signup);
router.post('/login', usersController.login);

module.exports = router;