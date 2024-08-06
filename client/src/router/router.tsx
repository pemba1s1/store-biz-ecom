
import { Routes, Route } from "react-router-dom";
import Cart from "../pages/store/cart";
import ErrorPage from "../pages/error-page";
import Home from "../pages/store/home";
import CategoryPage from "../pages/store/category";
import ProductDetailPage from "../pages/store/product-detail";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/category/:category" element={<CategoryPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}