const express = require('express');
const app = express();

const validateRequest = (req, res, next) => {
  if (!req.query.text) return res.status(400).json({ error: 'Missing req param: text' });
  next();
};

const sanitizeInput = (req, res, next) => {
  req.query.text = req.query.text.replace(/<[^>]*>?/gm, ''); // Strip HTML
  next();
};

const logRequest = (req, res, next) => {
  console.log(`[LOG] Request received for route: ${req.path}`);
  next();
};

// Route 1: Log -> Validate -> Sanitize
// If validation fails, it still logs it.
app.get('/process', logRequest, validateRequest, sanitizeInput, (req, res) => {
  res.json({ status: 'Processed', data: req.query.text });
});

// Route 2: Validate -> Log -> Sanitize 
// If validation fails, it never reaches logRequest so it won't be logged!
app.get('/swapped', validateRequest, logRequest, sanitizeInput, (req, res) => {
  res.json({ status: 'Swapped processed', data: req.query.text });
});

app.listen(3003, () => console.log('Task 4 running on http://localhost:3003'));
