require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoute = require('./routes/productRoute');
const adminRoute = require('./routes/adminRoute');
const paymentRoute = require('./routes/paymentRoute');
const userRoute = require('./routes/userRoute');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = process.env.NODE_ENV === 'production' ? ['https://admin-bizstore.vercel.app/', 'https://store-bizstore.vercel.app/'] : ['http://admin.localhost:5173', 'http://store.localhost:5173'];
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
}));

connectDB();
const baseApiUrl = '/api/v1';

app.use(`${baseApiUrl}/product`, productRoute);
app.use(`${baseApiUrl}/admin`, adminRoute);
app.use(`${baseApiUrl}/payment`, paymentRoute);
app.use(`${baseApiUrl}/user`, userRoute);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}).catch(err => {
  console.error('Error:', err);
});
