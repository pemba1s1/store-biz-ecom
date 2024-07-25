require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "*",
  credentials: true,
}));

connectDB();
const baseApiUrl = '/api/v1';

const products = [
  {
    id: "0",
    image: ["/images/products/1.png","/images/products/2.png","/images/products/3.png","/images/products/1.png","/images/products/2.png"],
    title: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in odio ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt.",
    price: "19.99",
    discount: "30",
    rating: 4.5
  },
  {
    id: "1",
    image: ["/images/products/2.png","/images/products/3.png","/images/products/1.png","/images/products/2.png"],
    title: "Product 2",
    price: "24.99",
    rating: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in odio ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt.",
  },
  {
    id: "2",
    image: ["/images/products/3.png","/images/products/1.png","/images/products/2.png"],
    title: "Product 3",
    price: "29.99",
    discount: "40",
    rating: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in odio ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt.",
  },
  {
    id: "3",
    image: ["/images/products/1.png","/images/products/2.png","/images/products/3.png","/images/products/1.png","/images/products/2.png"],
    title: "Product 1",
    price: "19.99",
    discount: "30",
    rating: 4.5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in odio ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt.",
  },
  {
    id: "4",
    image: ["/images/products/2.png","/images/products/3.png","/images/products/1.png","/images/products/2.png"],
    title: "Product 2",
    price: "24.99",
    discount: "38",
    rating: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in odio ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt.",
  },
  {
    id: "5",
    image: ["/images/products/3.png","/images/products/1.png","/images/products/2.png"],
    title: "Product 3",
    price: "29.99",
    discount: "40",
    rating: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in odio ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt.",
  }, 
]

app.use(`${baseApiUrl}/product/:id`, function(req, res) {
  const { id } = req.params;
  const product = products.find(product => product.id === id);
  return res.send(product);
});

app.use(`${baseApiUrl}/product`, function(req, res) {
  return res.send(products);
});

app.use(`${baseApiUrl}/new-arrival`, function(req, res) {
  return res.send(products);
});


function connectDB() {
  mongoose.connect(process.env.DB_URL)
  .then(async () => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error('Error:', err);
  });
}
