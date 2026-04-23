const express = require('express');
const fs = require('fs');
const app = express();

const logger = (level) => (req, res, next) => {
  const msg = `[${level.toUpperCase()}] ${req.method} ${req.url}\n`;
  console.log(msg.trim());
  fs.appendFileSync('app.log', msg);
  next();
};

app.use(logger('info')); // Global info logger

app.get('/', (req, res) => res.send('Home Route'));
app.get('/users', logger('warn'), (req, res) => res.send('Users Route with Warn Logger'));
app.get('/debug', logger('debug'), (req, res) => res.send('Debug Route'));

app.listen(3001, () => console.log('Task 2 running on http://localhost:3001'));
