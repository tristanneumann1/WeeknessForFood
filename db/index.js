var mongoose = require('mongoose');

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${
    process.env.DB_PASS
  }@ds149744.mlab.com:49744/weeknessforfood`
);

var db = mongoose.connection;

db.on('error', () => {
  console.log('error connecting to database');
});

db.on('open', () => {
  console.log('database connected');
});
