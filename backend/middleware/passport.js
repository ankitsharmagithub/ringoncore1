const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.model');
const bcrypt = require("bcryptjs");

module.exports = (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
 
      try {
        const user = await User.findOne({ email });
         
        if (!user) {
          return done(null, false);
        }
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
          // If password is incorrect
          return done(null, false);
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    })
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
};
