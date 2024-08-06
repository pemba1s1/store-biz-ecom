
import Feature from "../../../component/feature";
import useStoreBizStore from "../../../store/store";
import CartItem from "../../../component/cart-item";
import OrderSummary from "../../../component/order-summary";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const { cartItems } = useStoreBizStore();

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
          <OrderSummary handleClick={() => navigate('/checkout')}/>
        </div>
      </div>
      <Feature />
    </>
  )
}
