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

### Test Cases

| **Description** | **Test Step** | **Expected Result** | **Status** |
|-----------------|---------------|---------------------|------------|
| **Redirect to Admin Login if User is Not Logged In** | Visit `http://admin.localhost:5173/` without being logged in | The user is redirected to the admin login page. | Pass |
| **Invalid Admin Login Attempt** | Attempt to log in with incorrect credentials on the admin login page | The application displays an error message indicating that the login failed. | Pass |
| **Admin Login Using Seeded Credentials** | Navigate to `http://admin.localhost:5173/login`, enter admin credentials, and submit the form | Admin successfully logs in and is redirected to the admin dashboard. | Pass |
| **Admin Adds/Updates/Deletes a Product** | Log in as admin, navigate to the product management section, and attempt to add, update, and delete a product | Admin is able to successfully add, update, and delete a product with confirmation messages for each action. | Pass |
| **Admin Logs Out** | Click the logout button on the navbar | Admin is logged out, redirected to the login page, and cannot access any admin functionalities (like create, edit, view, or delete products) without logging in again. | Pass |
| **Add Item to Cart** | Visit `http://store.localhost:5173/`, select a product, specify quantity, and add it to the cart | The product is added to the cart with the specified quantity, and a confirmation message is displayed. | Pass |
| **Display of Products When a Category is Clicked** | Navigate to the e-commerce homepage, click on a category, and view the listed products | The application displays only the products belonging to the selected category, and the number of products is accurate. | Pass |
| **View Product Details** | Click on a product from the product listing page | The application navigates to the product details page, displaying detailed information about the selected product. | Pass |
| **Manage Cart: Verify All Added Products, Update Quantity, and Remove Items** | Add multiple products to the cart, then navigate to the cart page. Attempt to change the quantity of one or more items and remove one or more items from the cart. | The cart displays all added products with correct details. The user can update the quantity, remove items from the cart, and the cart total updates to reflect these changes. | Pass |
| **Prevent Proceeding to Next Step Without Required Information** | Navigate to the checkout page. Complete the current step with incomplete or missing required information (e.g., shipping address, payment details). Attempt to proceed to the next step. | The application should prevent the user from proceeding to the next step and display appropriate error messages indicating the missing or incomplete information. | Pass |
