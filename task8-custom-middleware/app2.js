const express = require('express');
const reqIdGen = require('./req-id-generator');
const app = express();

app.use(reqIdGen);

app.get('/status', (req, res) => res.json({ app: 'App 2', status: 'OK', assignedRequestId: req.id }));

app.listen(3008, () => console.log('Task 8 (App 2) running on port 3008'));
