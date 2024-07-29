
const mongoose = require('mongoose');

async function connectDB() {
  return mongoose.connect(process.env.DB_URL)
}

module.exports = connectDB;
