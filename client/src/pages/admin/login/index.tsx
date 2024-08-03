
import { useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axiosInstance.post("/admin/login", {
      username,
      password,
    }).then((res) => {
      localStorage.setItem("token", res.data.token);
      setError(null);
    }).catch((err) => {
      setError(err.response.data);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center h-[500px] justify-center">        
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <input
      type="name"
      placeholder="Username"
      value={username}
      onChange={handleEmailChange}
      className="border w-[400px] border-gray-300 rounded-md px-4 py-2 mb-4"
      />
      <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={handlePasswordChange}
      className="border w-[400px] border-gray-300 rounded-md px-4 py-2 mb-4"
      />
      {error && <p className="text-red-500 w-[400px] mb-2">{error}</p>}
      <button
      type="submit"
      className="bg-blue-500 w-[400px] text-white rounded-md px-4 py-2"
      >
      Login
      </button>
    </form>
    );
}
