require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoute = require('./routes/productRoute');
const adminRoute = require('./routes/adminRoute');

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
app.use(`${baseApiUrl}/admin`, adminRoute);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}).catch(err => {
  console.error('Error:', err);
});
