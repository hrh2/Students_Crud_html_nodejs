//Database connection function
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/studentDB'/*database url is added*/, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Connection to MongoDB failed:', err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = {connectDB};
