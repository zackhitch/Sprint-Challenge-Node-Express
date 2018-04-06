const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const projectsRouter = require('./projects/projectsRouter.js');
const actionsRouter = require('./actions/actionsRouter.js');

const server = express();

server.use(helmet());
server.use(morgan('dev'));
server.use(cors());
server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

const port = 5020;
server.listen(port, () => console.log('API running on port 5020'));
