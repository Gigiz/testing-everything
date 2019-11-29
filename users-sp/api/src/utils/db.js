const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const connection = mongoose.connect(process.env.MONGODB_URI, {
  autoIndex: true,
  reconnectTries: 10,
  reconnectInterval: 500,
  poolSize: 50,
  bufferMaxEntries: 0,
  keepAlive: 200,
  useNewUrlParser: true,
});

mongoose.set('useCreateIndex', true);

connection
  .then(db => db)
  .catch(err => {
    console.log(err);
  });

module.exports = connection;
