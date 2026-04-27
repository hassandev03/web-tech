const express = require('express');
const reqIdGen = require('./req-id-generator');
const app = express();

app.use(reqIdGen);

app.get('/', (req, res) => res.json({ app: 'App 1', assignedRequestId: req.id }));

app.listen(3007, () => console.log('Task 8 (App 1) running on port 3007'));
