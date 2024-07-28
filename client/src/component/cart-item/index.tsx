
import { MdDelete } from "react-icons/md";
import { Product } from "../../types/types";
import { useEffect, useState } from "react";
import useStoreBizStore from "../../store/store";
import QuantityInput from "../input/quantity-input";

export default function CartItem({ product } : { product: Product }) {
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [quantityInputType, setQuantityInputType] = useState("select");
  const { cartItems, setCartItems } = useStoreBizStore();

  useEffect(() => {
    if (product.quantity && product.quantity > 9) setQuantityInputType("input");
    else setQuantityInputType("select");  
  }, []);

  useEffect(() => {
    if (product.quantity) {
      setQuantity(product.quantity);
      if (product.discount) {
        const priceAfterDiscount = (parseFloat(product.price) - (parseFloat(product.price) * (parseFloat(product.discount) / 100))).toFixed(2);
        setTotal((parseFloat(priceAfterDiscount) * product.quantity).toFixed(2));
        setItemPrice(priceAfterDiscount);
      } else {
        setTotal((parseFloat(product.price) * product.quantity).toFixed(2));
      }
    }
  }, [product.quantity]);

  const handleRemove = () => {
    const newCartItems = cartItems.filter((item: Product) => item.id !== product.id);
    setCartItems(newCartItems);
    localStorage.setItem("cart", JSON.stringify(newCartItems));
  }

  const handleQuantityChange = (e) => {
    if (e.target.value === "more") {
      setQuantity(10);
      setQuantityInputType("input");
      return;
    }
    const qty = parseInt(e.target.value);
    setQuantity(qty);
    const foundItem = cartItems.find((item: Product) => item.id === product.id);
    if (foundItem) {
      foundItem.quantity = qty;
    } 
    setCartItems(cartItems);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  return (
    <>
      <div className="flex justify-between my-5">
      <div className="flex">
        { product.image && product.image.length > 0 ?
        <img src={product.image[0]} alt={product.title} className="w-[100px] h-[100px] object-cover" />
        :
        <img src="/images/products/no-image.jpg" alt="no image" className="w-[100px] h-[100px] object-cover" />
        }
        <div className="ml-5">
        <p className="text-xl font-bold">{product.title}</p>
        <div className="flex items-center justify-center mt-3 gap-4">
          <QuantityInput quantity={quantity} handleQuantityChange={handleQuantityChange} quantityInputType={quantityInputType} />
          <button className="flex gap-1 text-red-500 text-xl items-center" onClick={handleRemove}><MdDelete className="text-3xl"/>Remove</button>
        </div>
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold mt-2">{itemPrice}</p>
        <p className="line-through">${product.price}</p>
      </div>
      </div>
      <div className="flex justify-between text-xl font-bold border-b border-black pb-3">
      <p>Product Total</p>
      <p>${total}</p>
      </div>
    </>
    )
}
