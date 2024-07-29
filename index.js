require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const ProductModel = require('./models/product');
const productRoute = require('./routes/productRoute');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "*",
  credentials: true,
}));

connectDB();
const baseApiUrl = '/api/v1';

app.use(`${baseApiUrl}/product`, productRoute);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}).catch(err => {
  console.error('Error:', err);
});
