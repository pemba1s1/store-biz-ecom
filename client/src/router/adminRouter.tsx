
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import ErrorPage from "../pages/error-page";
import AdminDashboard from "../pages/admin/dashboard";
import AdminLogin from "../pages/admin/login";
import AdminProduct from "../pages/admin/product";
import AdminProductAdd from "../pages/admin/product/add";
import AdminProductUpdate from "../pages/admin/product/update";
import AdminProductView from "../pages/admin/product/view";
import useAdminStoreBizStore from "../store/adminStore";

export default function Router() {
  const {isAdmin} = useAdminStoreBizStore();
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route element={<ProtectedRoute isAuthenticated={isAdmin} />} >
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/product" element={<AdminProduct />} />
        <Route path="/product/:id" element={<AdminProductView />} />
        <Route path="/product/add" element={<AdminProductAdd />} />
        <Route path="/product/edit/:id" element={<AdminProductUpdate />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

const ProtectedRoute = ({isAuthenticated}: {isAuthenticated: boolean}) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}