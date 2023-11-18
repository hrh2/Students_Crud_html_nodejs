// studentModel.js

const mongoose = require('mongoose');

// Define the schema for the student collection
const studentSchema = new mongoose.Schema({
  id: String,
  name: String,
  age: Number,
});

// Create the model for the student collection
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
