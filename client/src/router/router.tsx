
import { Routes, Route } from "react-router-dom";
import Cart from "../pages/cart";
import ErrorPage from "../pages/error-page";
import Home from "../pages/home";
import ProductDetailPage from "../pages/product-detail";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}