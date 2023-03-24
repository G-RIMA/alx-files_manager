const express = require('express');
const app = express();

const db = require('./utils/db');
const redis = require('./utils/redis');
const routes = require('./routes/index');

app.use(express.json());
app.use('/api/v1', routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;

