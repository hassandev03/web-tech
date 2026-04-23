const express = require('express');
const app = express();

const throwError = (status, msg) => {
  const err = new Error(msg);
  err.status = status;
  return err;
};

// Route simulating 400 Bad Request
app.get('/bad-request', (req, res, next) => next(throwError(400, 'Invalid payload sent!')));

// Route simulating 401 Unauthorized
app.get('/unauthorized', (req, res, next) => next(throwError(401, 'Please log in!')));

// Route simulating 500 Uncaught Exception
app.get('/server-error', (req, res) => {
  throw new Error('Database connection lost!');
});

// Reusable Error-Handling Middleware (catches all)
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

app.listen(3005, () => console.log('Task 6 running on http://localhost:3005'));
