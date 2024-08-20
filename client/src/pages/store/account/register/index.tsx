
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../../utils/axiosInstance";

export default function UserRegister() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password || !email) {
      setError("Please fill out all fields");
      return;
    }
    axiosInstance.post("/user/register", {
      username,
      email,
      password,
    }).then((res) => {
      console.log(res.data);
      setError('');
      navigate("/");
    }).catch((err) => {
      setError(err.response.data);
    });
  }

  return (
    <div className="flex flex-col h-[500px] items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Create An Account</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
        <input
        type="name"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
        className="border w-[400px] border-gray-300 rounded-md px-4 py-2 mb-4"
        />
        <input
        type="email"
        placeholder="Email"
        value={email}
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
        Create Account
        </button>
      </form>
      <p className="mt-4">Already have an account? <Link to="/account/login" className="text-blue-500">Login</Link></p>
    </div>
  );
}