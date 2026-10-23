const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from AWS CI/CD Capstone Project V2!');
});

// ALB target group health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

module.exports = app;

