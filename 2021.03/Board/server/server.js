const express = require('express');
const logger = require('morgan');
const routes = require('./routes');

const app = express();
app.use(logger('dev')); // prod단계에서는 combined?

const port = process.env.PORT || 3001;

app.use('/', routes);

app.listen(port, () => {
  console.log(`Listen on port ${port}.`);
});
