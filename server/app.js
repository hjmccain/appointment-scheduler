const express = require('express');
const path = require('path');
const GoogleStrategy = require('passport-google-oauth20');
const passport = require('passport');
const dotenv = require('dotenv');
let currentUser;

const useOrUpdate = (id) => {
  if (id !== currentUser) { currentUser = id };
  console.log(currentUser);
}

passport.use(new GoogleStrategy({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    useOrUpdate({ googleId: profile.id })
    .then((user) => {
      callback(null, user)
    }).catch((err) => {
      console.error(err);
    });
  }
));

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
