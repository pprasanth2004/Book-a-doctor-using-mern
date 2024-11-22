const mongoose = require('mongoose');

const connectToDB = () => { 
  const mongoURI = process.env.MONGO_DB;

  if (!mongoURI) {
    throw new Error('MongoDB URI is not defined. Please set the MONGO_DB environment variable.');
  }

  console.log('Connecting to MongoDB...');

  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error(`Could not connect to MongoDB: ${err}`);
      process.exit(1);
    });
};

module.exports = connectToDB;
