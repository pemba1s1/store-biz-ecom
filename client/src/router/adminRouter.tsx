
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/error-page";
import AdminDashboard from "../pages/admin/dashboard";
import AdminLogin from "../pages/admin/login";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/login" element={<AdminLogin />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}