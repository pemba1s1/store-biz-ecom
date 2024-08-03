
import { Routes, Route } from "react-router-dom";
import Cart from "../pages/cart";
import ErrorPage from "../pages/error-page";
import Home from "../pages/home";
import ProductDetailPage from "../pages/product-detail";
import CategoryPage from "../pages/category";
import AdminDashboard from "../pages/admin/dashboard";
import AdminLogin from "../pages/admin/login";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/category/:category" element={<CategoryPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}