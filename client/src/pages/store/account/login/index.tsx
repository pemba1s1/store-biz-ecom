
import { useState } from "react";
import axiosInstance from "../../../../utils/axiosInstance";
import { Link, useNavigate } from "react-router-dom";
import useStoreBizStore from "../../../../store/store";
import LoginForm from "../../../../component/login";

export default function UserLogin() {
  const navigate = useNavigate();
  const { setUser } = useStoreBizStore();
  const [error, setError] = useState(null);

  const handleLogin = (username: string, password: string) => {
    axiosInstance.post("/user/login", {
      username,
      password,
    }).then((res) => {
      console.log(res.data);
      setUser(res.data.user);
      localStorage.setItem("token", res.data.token);
      setError(null);
      navigate("/");
    }).catch((err) => {
      setError(err.response.data);
    });
  };

  return (
    <div className="flex flex-col h-[500px] items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      <LoginForm handleLogin={handleLogin} error={error} />
      <p className="mt-4">Don't have an account? <Link to="/account/register" className="text-blue-500">Register</Link></p>
    </div>
    );
}

