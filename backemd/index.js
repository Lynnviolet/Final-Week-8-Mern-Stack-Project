// server.js
const express = require('express');
const app = express();

const useSentry = require('./sentry');
useSentry(app);

// Your routes here...
app.get('/', (req, res) => {
  res.send('Hello from backend');
});

app.listen(5000, () => console.log('Server running on port 5000'));
