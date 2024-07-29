# E-Commerce Project

**Student Name**: Pemba Norsang Sherpa
**Student Number**: 8965121
**Date**: 7/18/2024

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
Copy env files
````
cp .env.example .env
cd client && cp .env.example .env
````
Seed Database
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
