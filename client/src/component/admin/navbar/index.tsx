import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import useAdminStoreBizStore from "../../../store/adminStore";

export default function AdminNavbar() {
  const navigate = useNavigate();
  const {isAdmin, setIsAdmin} = useAdminStoreBizStore();
  
  useEffect(() => {
    console.log("AdminNavbar");
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    axiosInstance.get("/admin/verify", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(() => {
      setIsAdmin(true);
    }).catch(err => {
      console.log(err);
      localStorage.removeItem("token");
      setIsAdmin(false);
      navigate("/login");
    });
  },[isAdmin])
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAdmin(false);
    navigate("/login");
  }
  return (
    <nav className="flex px-10 justify-between h-[60px] items-center align-middle text-xl bg-[#f1f1f1]">
      <Link to="/" className="text-black font-bold hover:text-black"><p>Admin</p></Link>
      {isAdmin && (
        <>
          <div className="flex gap-5">
            <Link to="/product" className="text-black">Products</Link>
            <Link to="/order" className="text-black">Orders</Link>
            <Link to="/user" className="text-black">Users</Link>
          </div>
          <button onClick={handleLogout} className="text-black font-bold hover:text-red-600">Logout</button>
        </>
      )}
    </nav>
  )
}
