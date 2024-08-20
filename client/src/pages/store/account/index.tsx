import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/account/login");
    }
  }, []);
  return (
    <div>
      <h1>Account</h1>
      <p>This is the account page</p>
    </div>
  );
}