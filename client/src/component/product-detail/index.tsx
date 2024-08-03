import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../types/types";
import useStoreBizStore from "../../store/store";
import QuantityInput from "../input/quantity-input";
import Review from "../review";
import axiosInstance from "../../utils/axiosInstance";

export default function ProductDetail () {
  const params = useParams();
  const { cartItems, setCartItems } = useStoreBizStore();
  const [quantity, setQuantity] = useState(1);
  const [productPrice, setProductPrice] = useState("");
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [quantityInputType, setQuantityInputType] = useState("select");

  useEffect(() => {
    setLoading(true);
    axiosInstance.get(`/product/${params.id}`)
    .then(res => {
      const product = res.data;
      console.log(product)
      setProduct(product);
      if(product && product.discount) setProductPrice((parseFloat(product.price) - (parseFloat(product.price) * (parseFloat(product.discount) / 100))).toFixed(2));
      else setProductPrice(product.price);
      setLoading(false);
    })
    .catch(err=> {
      console.log(err);
      setLoading(false);
    });
  },[params.id]);

  const handleAddToCart = () => {
    if (!product) return;
    const foundItem = cartItems.find((item: Product) => item._id === product._id);
    if (foundItem && foundItem.quantity) {
      foundItem.quantity += quantity;
    } else {
      cartItems.push({ 
        _id: product._id,
        price: product.price,
        title: product.title,
        image: product.image,
        discount: product.discount || undefined,
        discountedPrice: product.discount ? productPrice : undefined,
        quantity
      });
    }
    setCartItems(cartItems);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  const handleQuantityChange = (e) => {
    if (e.target.value === "more") {
      setQuantity(10);
      setQuantityInputType("input");
      return;
    }
    const qty = parseInt(e.target.value);
    setQuantity(qty);
  }

  return (
    <div className="bg-[#f1f1f1] py-10">
      {
        loading 
        ? <p>Loading...</p> 
        : product ? 
          <div className="flex justify-around w-[80%] mx-auto">
            <div className="w-[40%] flex flex-col items-center">
              {product.image && product.image.length > 0 ? (
                <>
                  <img src={product.image[ 0 ]} alt={product.title} className="w-full object-cover rounded-lg" />
                  <div className="flex gap-2 w-full overflow-hidden mt-3">
                    {product.image.map((img, index) => (
                      <img src={img} alt={product.title} className="w-[24%] object-cover rounded-lg" key={`${ index }-${ product.title }`} />
                    ))}
                  </div>
                </>
              ) : (
                <img src="/images/products/no-image.jpg" alt="no image" className="w-full object-cover rounded-lg" />
              )}
              
            </div>
            <div className="w-[40%] pt-5">
              <p className="text-3xl font-bold">{product.title}</p>
              <Review rating={product.rating} />
              <p className="text-2xl font-semibold mt-2">${productPrice}</p>
              {
                product.discount &&
                <p className="text-lg mt-2">
                  <span className="line-through">${product.price}</span>
                  <span className="text-red-500 ml-2">{product.discount}% off</span>
                </p>    
              }      
              <p className="mt-2">
                { product.description }            
              </p>
              <div className="flex gap-2 mt-3">
                <QuantityInput quantity={quantity} handleQuantityChange={handleQuantityChange}  quantityInputType={quantityInputType}/>
                <button onClick={handleAddToCart} className="bg-white text-black hover:bg-black border-black border-2 py-4 px-8 hover:text-white rounded-lg text-lg font-bold">Add to Cart</button>
              </div>
            </div>
          </div>
          : <p className="text-2xl text-center">Product not found</p> 
      }
    </div>
  );
}