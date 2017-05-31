const express = require('express');
const path = require('path');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const dotenv = require('dotenv');
let currentUser = "Hannah";

const useOrUpdate = (id) => {
  if (id !== currentUser) { currentUser = id };
  console.log(currentUser);
}

passport.use(new GoogleStrategy({
    clientID: "135740859520-ptces7fkphlrnqfl3rtsq8jbke0bfgu1.apps.googleusercontent.com",
    clientSecret: "Dw-flOmzT24ZTpf7oR4vNJsh",
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

app.get('/auth/google',
  passport.authenticate('google',
  { scope: ['https://www.googleapis.com/auth/calendar.readonly'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/', session: false }),
  function(req, res) {
    res.redirect('/');
  });


app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
