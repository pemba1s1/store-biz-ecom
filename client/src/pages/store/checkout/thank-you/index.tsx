
import { useEffect } from "react";
import useStoreBizStore from "../../../../store/store";
import { useParams } from "react-router-dom";

export default function ThankYou() {
  const { id } = useParams();
  const {setCartItems} = useStoreBizStore();

  useEffect(() => {    
    if (!id || id != "123") return;
    localStorage.removeItem("cart");
    setCartItems([]);
  }, [ id ]);

  return (
    <div className="w-[70%] mx-auto py-4 min-h-[55vh] flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Thank you for your order!</h1>
      <p className="text-lg mt-4">Your order has been placed and is being processed. You will receive an email confirmation shortly.</p>
    </div>
  );
}