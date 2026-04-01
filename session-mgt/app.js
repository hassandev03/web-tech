const express = require('express');
const session = require('express-session');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret:            'ssshhhhh',
    resave:            false,
    saveUninitialized: false
}));


// POST /login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email === 'admin@adv-web.comsats.edu.pk' && password === 'abc90125') {
        req.session.email = email;
        res.json({ message: 'Login successful', email: req.session.email });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// GET /profile
app.get('/profile', (req, res) => {
    if (req.session.email) {
        res.json({ message: 'Welcome!', email: req.session.email });
    } else {
        res.status(401).json({ message: 'Unauthorized. Please login first.' });
    }
});

// GET /logout
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.status(500).json({ message: 'Logout failed' });
        } else {
            res.json({ message: 'Logged out successfully' });
        }
    });
});


module.exports = app;  
