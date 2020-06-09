const passport = require('passport'); // requiring the original npm passport module, not the passport.js file

module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    
    app.get(
        '/auth/google/callback',
        passport.authenticate('google')
    );
}
