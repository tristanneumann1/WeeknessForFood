var mongoose = require('mongoose');

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${
    process.env.DB_PASS
  }@ds243041.mlab.com:43041/weeknessforfood`
);

var db = mongoose.connection;

db.on('error', () => {
  console.log('error connecting to database');
});

db.on('open', () => {
  console.log('database connected');
});
