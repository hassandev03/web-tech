const express = require('express');
const app = express();

const rateLimiter = ({ limit, windowMs }) => {
  const store = new Map();
  return (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();
    if (!store.has(ip)) store.set(ip, []);

    const timestamps = store.get(ip).filter(ts => ts > now - windowMs);
    timestamps.push(now);
    store.set(ip, timestamps);

    if (timestamps.length > limit) {
      return res.status(429).json({ error: 'Too many requests, try again later' });
    }
    next();
  };
};

app.post('/login', rateLimiter({ limit: 2, windowMs: 10000 }), (req, res) => {
  res.json({ message: 'Login successful' });
});

app.get('/api', rateLimiter({ limit: 5, windowMs: 10000 }), (req, res) => {
  res.json({ message: 'API Data' });
});

app.listen(3006, () => console.log('Task 7 running on http://localhost:3006'));
