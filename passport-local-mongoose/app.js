const express        = require('express');
const session        = require('express-session');
const mongoose       = require('mongoose');
const passport       = require('passport');
const LocalStrategy  = require('passport-local').Strategy;
const User           = require('./models/User');

const app = express();

mongoose.connect('mongodb://localhost:27017/passport-mongoose-test')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(session({
    secret:            'ssshhhhh',
    resave:            false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(User.authenticate()));

// serialize and deserialize user instances
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// this function checks if user is authenticated before allowing access
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.status(401).json({ message: 'Unauthorized. Please login first.' });
}

app.post('/register', async (req, res) => {
    try {
        const { username, password, name, age } = req.body;
        const user = new User({ username, name, age });   

        await User.register(user, password);
        res.json({ message: 'User registered successfully', username, name, age });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/login', passport.authenticate('local'), (req, res) => {
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