import { VscAccount } from "react-icons/vsc";
import SearchBar from "../searchbar";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex w-[90%] mx-auto justify-between navbar items-center align-middle text-xl">
      <div className="navbar__logo">
        <Link to="/">
          <img src="/logo/logo.png" className="logo" alt="Vite logo" />
        </Link>
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="flex gap-5">
        <Link to="/account" className="flex items-center gap-1 text-black">
          <VscAccount /> Account
        </Link>
        <Link to="/cart" className="flex items-center gap-1 text-black">
          <IoCartOutline /> Cart
        </Link>
      </div>
    </nav>
  )
}