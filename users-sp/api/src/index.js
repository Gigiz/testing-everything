const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');

const schema = require('./schema');
require('./utils/db');

const app = express();

const server = new ApolloServer({
  schema,
  cors: true,
  playground: true,
  introspection: true,
  tracing: true,
  path: '/',
});

server.applyMiddleware({
  app,
  path: '/',
  cors: true,
  onHealthCheck: () => {
    new Promise((resolve, reject) => {
      if (mongoose.connection.readyState > 0) {
        resolve();
      }
      reject();
    })
  },
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server listening on port ${process.env.PORT}`);
  console.log(`😷 Health checks available at ${process.env.HEALTH_ENDPOINT}`);
});
