import { VscAccount } from "react-icons/vsc";
import SearchBar from "../searchbar";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useStoreBizStore from "../../store/store";

export default function Navbar() {
  const { cartItems, setCartItems } = useStoreBizStore(); 
  useEffect(() => {
    if (cartItems.length === 0) {
      const items = localStorage.getItem('cart')
      console.log("Trying to get items from local storage")
      if (items) {
        setCartItems(JSON.parse(items))
      }
    }
  }, [cartItems.length, setCartItems]);

  return (
    <nav className="flex store-biz-container justify-between navbar items-center align-middle text-xl">
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
          <IoCartOutline /> Cart {cartItems.length > 0 && <span className="ms-1 bg-red-500 text-white px-3 py-1 rounded-full">{cartItems.length}</span>}
        </Link>
      </div>
    </nav>
  )
}