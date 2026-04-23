const express = require('express');
const axios = require('axios');
const app = express();

const fetchUserAsync = async (req, res, next) => {
  try {
    if (req.query.fail === 'true') throw new Error('Simulated Async Failure');
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    req.userData = response.data;
    next();
  } catch (error) {
    next(error); 
  }
};

const fetchUserPromise = (req, res, next) => {
  if (req.query.fail === 'true') return next(new Error('Simulated Promise Failure'));
  axios.get('https://jsonplaceholder.typicode.com/users/2')
    .then(response => {
      req.userData = response.data;
      next();
    }).catch(next);
};

app.get('/async', fetchUserAsync, (req, res) => res.json({ method: 'async/await', data: req.userData }));
app.get('/promise', fetchUserPromise, (req, res) => res.json({ method: '.then().catch()', data: req.userData }));

app.use((err, req, res, next) => res.status(500).json({ error: err.message }));

app.listen(3000, () => console.log('Task 1 running on http://localhost:3000'));
