import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";

export default function AdminDashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/admin/login");
    }
    axiosInstance.get("/admin/verify", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).catch(err => {
      console.log(err);
      navigate("/login");
    });
  },[])

  return (
    <div>
      <h1>Admin Dashboard</h1>
    </div>
  );
}