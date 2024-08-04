
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/error-page";
import AdminDashboard from "../pages/admin/dashboard";
import AdminLogin from "../pages/admin/login";
import AdminProduct from "../pages/admin/product";
import AdminProductAdd from "../pages/admin/product/add";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/product" element={<AdminProduct />} />
      <Route path="/product/add" element={<AdminProductAdd />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}