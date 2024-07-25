
import Feature from "../../component/feature";
import useStoreBizStore from "../../store/store";
import CartItem from "../../component/cart-item";
import { useEffect, useState } from "react";

export default function Cart() {
  const { cartItems } = useStoreBizStore();
  const [subTotal, setSubTotal] = useState("");
  const [discount, setDiscount] = useState("");
  const [shipping, setShipping] = useState("");
  const [taxes, setTaxes] = useState("");
  const [total, setTotal] = useState("");

  useEffect(() => {
    if (cartItems.length === 0) return;
    let subTotal = 0;
    let discount = 0;
    let shipping = 0;
    let taxes = 0;
    let total = 0;
    for(const item of cartItems) {
      if (item.quantity) {
        subTotal += parseFloat(item.price) * item.quantity;
      }
      if (item.discount) {
        discount += parseFloat(item.price) * parseFloat(item.discount)/100;
      }
      shipping = subTotal * 0.1;
      taxes = subTotal * 0.05;
      total = subTotal - discount + shipping + taxes;
      setSubTotal(subTotal.toFixed(2));
      setDiscount(discount.toFixed(2));
      setShipping(shipping.toFixed(2));
      setTaxes(taxes.toFixed(2));
      setTotal(total.toFixed(2));
    }
  }, [cartItems]);

  return (
    <>
      <div className="bg-[#f1f1f1]">
        <div className="w-[70%] mx-auto py-8 flex justify-between">
          <div className="w-[60%]">
            <p className="text-3xl font-bold mb-4">Cart items</p>
            {
              cartItems.length > 0 
              ? 
              cartItems.map((item, index) => (
                <CartItem key={index} product={item} />
              ))
              : 
              <div>
                <p className="text-lg mb-3">Looks like it's empty!</p>
                <p className="text-sm">Why not add something?</p>
              </div>
            }
          </div>
          { cartItems.length > 0 && 
          <div className="w-[30%]">
            <p className="text-3xl font-bold mb-4">Order Summary</p>
            <div className="flex justify-between mb-2">
              <p>Product Subtotal</p>
              <p>${ subTotal }</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Order Discounts</p>
              <p className="text-red-500">-${ discount }</p>
            </div>
            <div className="flex justify-between mb-3">
              <p>Estimated Shipping</p>
              <p>${ shipping }</p>
            </div>
            <div className="flex justify-between pb-3 border-b border-black">
              <p>Estimated Taxes</p>
              <p>${ taxes }</p>
            </div>
            <div className="flex justify-between mt-2">
              <p>Estimated Total</p>
              <p>${ total }</p>
            </div>
            <div>
              <button className="bg-white text-black border border-black hover:bg-black hover:text-white w-full py-3 mt-5 rounded-lg">Proceed to Checkout</button>
            </div>
          </div>
          }
        </div>
      </div>
      <Feature />
    </>
  )
}
