const express = require('express');
const requestTimer = require('request-timer-pkg');
const app = express();

app.use(requestTimer);

app.get('/', (req, res) => res.send('Hello from App 1'));
app.get('/slow', (req, res) => setTimeout(() => res.send('Delayed response'), 500));

app.listen(3007, () => console.log('Task 8 (App 1) running on http://localhost:3007'));
