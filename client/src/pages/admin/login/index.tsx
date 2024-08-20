
import { useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import useAdminStoreBizStore from "../../../store/adminStore";
import LoginForm from "../../../component/login";

export default function AdminLogin() {
  const navigate = useNavigate();
  const {setIsAdmin} = useAdminStoreBizStore();
  const [error, setError] = useState(null);

  const handleLogin = (username: string, password: string) => {
    axiosInstance.post("/admin/login", {
      username,
      password,
    }).then((res) => {
      localStorage.setItem("token", res.data.token);
      setError(null);
      setIsAdmin(true);
      navigate("/");
    }).catch((err) => {
      setError(err.response.data);
    });
  };

  return (
    <div className="flex flex-col h-[500px] items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <LoginForm handleLogin={handleLogin} error={error} />
    </div>
    );
}

