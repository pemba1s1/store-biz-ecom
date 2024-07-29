
require('dotenv').config();
const connectDb = require('./config/db');
const CategoryModel = require('./models/category');
const ProductModel = require('./models/product');
const UserModel = require('./models/user');

const products = [
  {
    image: [
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/1.png?t=2024-07-29T00%3A55%3A50.521Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/2.png?t=2024-07-29T00%3A56%3A15.315Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/3.png?t=2024-07-29T00%3A56%3A47.835Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/1.png?t=2024-07-29T00%3A55%3A50.521Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/2.png?t=2024-07-29T00%3A56%3A15.315Z"
    ],
    title: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in odio ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt.",
    price: "19.99",
    discount: "30",
    rating: 4.5,
    category: "women-fashion",
  },
  {
    image: [
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/2.png?t=2024-07-29T00%3A56%3A15.315Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/3.png?t=2024-07-29T00%3A56%3A47.835Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/1.png?t=2024-07-29T00%3A55%3A50.521Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/2.png?t=2024-07-29T00%3A56%3A15.315Z"
    ],
    title: "Product 2",
    price: "24.99",
    rating: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in odio ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt.",
    category: "health-beauty",
  },
  {
    image: [
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/3.png?t=2024-07-29T00%3A56%3A47.835Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/1.png?t=2024-07-29T00%3A55%3A50.521Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/2.png?t=2024-07-29T00%3A56%3A15.315Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/1.png?t=2024-07-29T00%3A55%3A50.521Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/2.png?t=2024-07-29T00%3A56%3A15.315Z",
    ],
    title: "Product 3",
    price: "29.99",
    discount: "40",
    rating: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in odio ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt.",
    category: "men-fashion",
  },
  {
    image: [
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/1.png?t=2024-07-29T00%3A55%3A50.521Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/2.png?t=2024-07-29T00%3A56%3A15.315Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/3.png?t=2024-07-29T00%3A56%3A47.835Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/1.png?t=2024-07-29T00%3A55%3A50.521Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/2.png?t=2024-07-29T00%3A56%3A15.315Z"
    ],
    title: "Product 1",
    price: "19.99",
    discount: "30",
    rating: 4.5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in odio ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt.",
    category: "watches-accessories",
  },
  {
    image: [
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/2.png?t=2024-07-29T00%3A56%3A15.315Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/3.png?t=2024-07-29T00%3A56%3A47.835Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/1.png?t=2024-07-29T00%3A55%3A50.521Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/2.png?t=2024-07-29T00%3A56%3A15.315Z"
    ],
    title: "Product 2",
    price: "24.99",
    discount: "38",
    rating: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in odio ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt.",
    category: "tv-home-appliances",
  },
  {
    image: [
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/3.png?t=2024-07-29T00%3A56%3A47.835Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/1.png?t=2024-07-29T00%3A55%3A50.521Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/2.png?t=2024-07-29T00%3A56%3A15.315Z"
    ],
    title: "Product 3",
    price: "29.99",
    discount: "40",
    rating: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in odio ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt.",
    category: "electronic-devices",
  },
  {
    image: [
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/1.png?t=2024-07-29T00%3A55%3A50.521Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/2.png?t=2024-07-29T00%3A56%3A15.315Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/3.png?t=2024-07-29T00%3A56%3A47.835Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/1.png?t=2024-07-29T00%3A55%3A50.521Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/2.png?t=2024-07-29T00%3A56%3A15.315Z"
    ],
    title: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in odio ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt.",
    price: "19.99",
    discount: "30",
    rating: 4.5,
    category: "electronic-accessories",
  },
  {
    image: [
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/2.png?t=2024-07-29T00%3A56%3A15.315Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/3.png?t=2024-07-29T00%3A56%3A47.835Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/1.png?t=2024-07-29T00%3A55%3A50.521Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/2.png?t=2024-07-29T00%3A56%3A15.315Z"
    ],
    title: "Product 2",
    price: "24.99",
    rating: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in odio ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt.",
    category: "groceries-pets",
  },
  {
    image: [
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/3.png?t=2024-07-29T00%3A56%3A47.835Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/1.png?t=2024-07-29T00%3A55%3A50.521Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/2.png?t=2024-07-29T00%3A56%3A15.315Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/1.png?t=2024-07-29T00%3A55%3A50.521Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/2.png?t=2024-07-29T00%3A56%3A15.315Z",
    ],
    title: "Product 3",
    price: "29.99",
    discount: "40",
    rating: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in odio ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt.",
    category: "home-lifestyle",
  },
  {
    image: [
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/1.png?t=2024-07-29T00%3A55%3A50.521Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/2.png?t=2024-07-29T00%3A56%3A15.315Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/3.png?t=2024-07-29T00%3A56%3A47.835Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/1.png?t=2024-07-29T00%3A55%3A50.521Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/2.png?t=2024-07-29T00%3A56%3A15.315Z"
    ],
    title: "Product 1",
    price: "19.99",
    discount: "30",
    rating: 4.5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in odio ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt.",
    category: "sports-outdoor",
  },
  {
    image: [
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/2.png?t=2024-07-29T00%3A56%3A15.315Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/3.png?t=2024-07-29T00%3A56%3A47.835Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/1.png?t=2024-07-29T00%3A55%3A50.521Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/2.png?t=2024-07-29T00%3A56%3A15.315Z"
    ],
    title: "Product 2",
    price: "24.99",
    discount: "38",
    rating: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in odio ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt.",
    category: "motors-tools-diy",
  },
  {
    image: [
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/3.png?t=2024-07-29T00%3A56%3A47.835Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/1.png?t=2024-07-29T00%3A55%3A50.521Z",
      "https://yyehkleueajznnboczbq.supabase.co/storage/v1/object/public/images/2.png?t=2024-07-29T00%3A56%3A15.315Z"
    ],
    title: "Product 3",
    price: "29.99",
    discount: "40",
    rating: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in odio ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt.",
    category: "women-fashion",
  }, 
]

const category = [
  { name: "Women's Fashion", key: "women-fashion" },
  { name: "Health & Beauty", key: "health-beauty" },
  { name: "Men's Fashion", key: "men-fashion" },
  { name: "Watches & Accessories", key: "watches-accessories" },
  { name: "TV & Home Appliances", key: "tv-home-appliances" },
  { name: "Electronic Devices", key: "electronic-devices" },
  { name: "Electronic Accessories", key: "electronic-accessories" },
  { name: "Groceries & Pets", key: "groceries-pets" },
  { name: "Home & Lifestyle", key: "home-lifestyle" },
  { name: "Sports & Outdoor", key: "sports-outdoor" },
  { name: "Motors, Tools & DIY", key: "motors-tools-diy" },
];

const admin = new UserModel({
  username: "admin",
  password: process.env.ADMIN_PASSWORD,
  email: "admin@admin.com"
});

connectDb().then(async () => {
  console.log("Seeding Database...");
  await CategoryModel.insertMany(category);
  await ProductModel.insertMany(products);
  await admin.save();
  console.log("Database Seeded Successfully");
  return process.exit(0);
}).catch(error => {
  console.log("Seed.js Error: ", error);
});
