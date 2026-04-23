const express = require('express');
const requestTimer = require('request-timer-pkg');
const app = express();

app.use(requestTimer);

app.get('/dashboard', (req, res) => res.send('Dashboard data from App 2'));

app.listen(3008, () => console.log('Task 8 (App 2) running on http://localhost:3008'));
