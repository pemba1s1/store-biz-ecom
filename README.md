# E-Commerce Project

Store - https://store-bizstore.vercel.app/

Admin - https://admin-bizstore.vercel.app/

### Technology Stack

**Frontend**: ReactJS  
**Backend**: Node.js with Express  
**Database**: MongoDB (Atlas)

### Database Schema Design

**Products Schema (MongoDB)**

- `name`: String
- `description`: String
- `price`: Number
- `category`: String
- `stock`: Number
- `image`: String

**Order Items Schema (MongoDB)**

- `user_id`: UUID
- `status`: String
- `items`: [{
  `product_id`: String, `quantity`: int
}]

**Users Schema (MongoDB)**

- `username`: String
- `password`: String
- `email`: String

### Local Deployment
Clone Repo:
````
git clone https://github.com/pemba1s1/store-biz-ecom.git
````
Install Dependencies:
````
npm install
npm run install-client
````
Copy env files. 

Stripe is used as payment processor so make sure to add your stripe key in env. 

Supabase Storage is used to store images so set your supabase url and key in env. 

Admin credentials are passed from env while seeding.
````
cp .env.example .env
cd client && cp .env.example .env
````
Seed Database (to populate dummy data and admin user)
````
node seed.js
````
Run Server
````
npm run server
````
Run Client
````
npm run client
````
Store Url: http://store.localhost:5173/

Admin Url: http://admin.localhost:5173/
