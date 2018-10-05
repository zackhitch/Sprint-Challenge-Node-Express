const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const projectRoutes = require('./projects/projectRoutes');
const actionRoutes = require('./actions/actionRoutes');

const port = process.env.PORT || 9000;

const server = express();
server.use(express.json(), cors(), helmet(), morgan('combined'));

server.use('/api/projects', projectRoutes);
server.use('/api/actions', actionRoutes);

server.listen(port, () =>
  console.log(`\n=== API running on port: ${port} ===\n`)
);
