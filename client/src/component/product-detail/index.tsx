import { useEffect, useState } from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { useParams } from "react-router-dom";
import { Product } from "../../types/types";
import useStoreBizStore from "../../store/store";
import { set } from "mongoose";

export default function ProductDetail () {
  const params = useParams();
  const { cartItems, setCartItems } = useStoreBizStore();
  const [quantity, setQuantity] = useState(1);
  const [productPrice, setProductPrice] = useState("");

  const product = {
    id: "0",
    image: ["/images/products/1.png","/images/products/2.png","/images/products/3.png","/images/products/1.png","/images/products/2.png"],
    title: "Product 1",
    price: "29.99",
    discount: "30",
    rating: 4.5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus in odio ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt.",
  };

  useEffect(() => {
    if(product.discount) setProductPrice((parseFloat(product.price) - (parseFloat(product.price) * (parseFloat(product.discount) / 100))).toPrecision(2));
    else setProductPrice(product.price);
  }, [product.discount]);

  const handleAddToCart = () => {
    const foundItem = cartItems.find((item: Product) => item.id === product.id);
    if (foundItem && foundItem.quantity) {
      foundItem.quantity += quantity;
    } else {
      cartItems.push({ 
        id: product.id,
        price: product.price,
        title: product.title,
        image: product.image,
        discount: product.discount || null,
        quantity
      });
    }
    setCartItems(cartItems);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
    return (
      <div className="flex gap-1 mt-3">
        {Array(fullStars).fill(0).map((_, index) => (
          <IoIosStar key={`full-${fullStars}-${index}`} className="text-yellow-500" />
        ))}
        {halfStar && <IoIosStarHalf key="half" className="text-yellow-500 opacity-50" />}
        {Array(emptyStars).fill(0).map((_, index) => (
          <IoIosStarOutline key={`empty-${emptyStars}-${index}`} className="text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-[#f1f1f1] py-10">
      <div className="flex justify-around w-[80%] mx-auto">
        <div className="w-[40%] flex flex-col items-center">
          <img src={product.image[ 0 ]} alt={product.title} className="w-full object-cover rounded-lg" />
          <div className="flex gap-2 w-full overflow-hidden mt-3">
            {product.image.map((img, index) => (
              <img src={img} alt={product.title} className="w-[24%] object-cover rounded-lg" key={`${ index }-${ product.title }`} />
            ))}
          </div>
        </div>
        <div className="w-[40%] pt-5">
          <p className="text-3xl font-bold">{product.title}</p>
          {renderStars(product.rating)}
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
            <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} className="border-2 w-[80px] text-lg border-gray-300 rounded-lg text-center no-spinners" />
            <button onClick={handleAddToCart} className="bg-white text-black hover:bg-black border-black border-2 py-4 px-8 hover:text-white rounded-lg text-lg font-bold">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}