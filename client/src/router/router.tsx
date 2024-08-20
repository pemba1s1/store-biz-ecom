
import { Routes, Route } from "react-router-dom";
import Cart from "../pages/store/cart";
import ErrorPage from "../pages/error-page";
import Home from "../pages/store/home";
import CategoryPage from "../pages/store/category";
import ProductDetailPage from "../pages/store/product-detail";
import Checkout from "../pages/store/checkout";
import ThankYou from "../pages/store/checkout/thank-you";
import Account from "../pages/store/account";
import UserLogin from "../pages/store/account/login";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/category/:category" element={<CategoryPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/completion/:id" element={<ThankYou />} />
      <Route path="/account" element={<Account />} />
      <Route path="/account/login" element={<UserLogin />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}