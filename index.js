require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

function connectDB() {
  mongoose.connect(process.env.DB_URL)
  .then(async () => {
    console.log('Connected to MongoDB');
    startServer();
  })
  .catch(err => {
    console.error('Error:', err);
  });
}