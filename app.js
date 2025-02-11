const express = require('express');
const app = express();
const logger = require('./utils/logger');
const cardRoutes = require('./routes/index');

const loggingMiddleware = (req, res, next) => {
  logger.info(`Request: ${req.method} ${req.url}`);
  next();
};

app.use(express.json());
app.use(loggingMiddleware);
app.use('/api', cardRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});