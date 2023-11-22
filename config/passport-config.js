const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { User } = require('../models'); 

module.exports = function(passport) {
    passport.use(new LocalStrategy({ usernameField: 'email' },
    async (email, password, done) => {
        // Match user
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            return done(null, false, { message: 'No user found' });
        }

        // Match password
        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Password incorrect' });
            }
        } catch (e) {
            return done(e);
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findByPk(id).then((user) => {
            done(null, user);
        });
    });
};