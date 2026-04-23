const express = require('express');
const app = express();

const debugMiddleware = (req, res, next) => {
  if (req.query.debug === 'true') {
    req.debugInfo = { 
      timestamp: new Date().toISOString(), 
      ip: req.ip,
      mode: 'Debug active'
    };
  }
  next();
};

app.use(debugMiddleware);

app.get('/data', (req, res) => {
  const response = { success: true, user: 'John Doe' };
  
  if (req.debugInfo) {
    response._debug = req.debugInfo; // Attach debug info conditionally
  }
  
  res.json(response);
});

app.listen(3004, () => console.log('Task 5 running on http://localhost:3004'));
