const express        = require('express');
const session        = require('express-session');
const passport       = require('passport');
const LocalStrategy  = require('passport-local').Strategy;

const app = express();

// sample database simulation
const users = [
    { id: 1, username: 'hassandev03', password: 'devmh123' }
];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(session({
    secret:            'ssshhhhh',
    resave:            false,
    saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(function(username, password, done) {
    const user = users.find(u => u.username === username);

    if (!user) {
        return done(null, false, { message: 'User not found.' });
    }
    if (user.password !== password) {
        return done(null, false, { message: 'Incorrect password.' });
    }

    return done(null, user);  
}));


// serialization and deserialization of user
passport.serializeUser(function(user, done) {
    done(null, user.id);
});


passport.deserializeUser(function(id, done) {
    const user = users.find(u => u.id === id);
    done(null, user);
});

// this function checks that the user is logged in before allowing access 
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.status(401).json({ message: 'Unauthorized. Please login first.' });
}

app.post('/login', passport.authenticate('local', { session: true }), (req, res) => {
    res.json({ message: 'Login successful', user: req.user.username });
});


app.get('/profile', isLoggedIn, (req, res) => {
    res.json({ message: 'Welcome!', user: req.user.username });
});


app.get('/logout', (req, res) => {
    req.logout(function(err) {
        if (err) return res.status(500).json({ message: 'Logout failed' });
        res.json({ message: 'Logged out successfully' });
    });
});

module.exports = app;