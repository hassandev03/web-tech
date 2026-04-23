const express = require('express');
const app = express();

const authorizeRole = (requiredRole) => (req, res, next) => {
  const userRole = req.query.role; // e.g., ?role=admin
  if (userRole === requiredRole) {
    next();
  } else {
    res.status(403).json({ error: `Forbidden: Requires '${requiredRole}' role` });
  }
};

app.get('/', (req, res) => res.send('Home Page'));
app.get('/admin', authorizeRole('admin'), (req, res) => res.send('Welcome, Admin!'));
app.get('/editor', authorizeRole('editor'), (req, res) => res.send('Welcome, Editor!'));

app.listen(3002, () => console.log('Task 3 running on http://localhost:3002'));