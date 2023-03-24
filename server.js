const express = require('express');
const { controllerRouting } = require('./routes/index');

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

controllerRouting(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
