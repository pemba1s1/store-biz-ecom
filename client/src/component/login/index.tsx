
import { useState } from "react";

type LoginProps = {
  handleLogin: (username: string, password: string) => void;
  error: string | null;
};

export default function LoginForm({ handleLogin, error }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(username, password);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
      <input
      type="name"
      placeholder="Username"
      value={username}
      onChange={handleUsernameChange}
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

