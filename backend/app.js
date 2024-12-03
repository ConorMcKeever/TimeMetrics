const express = require('express');
const promMid = require('express-prometheus-middleware');
const app = express();

// Middleware for handling Authorization
app.use((req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (authHeader !== 'mysecrettoken') {
    return res.status(403).send('Forbidden');
  }
  next();
});

// Endpoint to get server time
app.get('/time', (req, res) => {
  const response = {
    epoch: Math.floor(Date.now() / 1000),
  };
  res.json(response);
});

// Middleware to collect Prometheus metrics
app.use(promMid({
  metricsPath: '/metrics',
  collectDefaultMetrics: true,
}));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});