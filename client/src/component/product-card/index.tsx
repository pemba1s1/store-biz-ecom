import { useNavigate } from "react-router-dom";
import { Product } from "../../types/types";
import { useEffect, useState } from "react";

export default function ProductCard({ id, image, title, price, discount } : Product) {
  const navigate = useNavigate();
  const [productPrice, setProductPrice] = useState("");

  useEffect(() => {
    if(discount) setProductPrice((parseFloat(price) - (parseFloat(price) * (parseFloat(discount) / 100))).toFixed(2));
    else setProductPrice(price);
  }, [discount]);

  const handleClick = () => {
    navigate(`product/${id}`);
  }

  return (
    <div className="border rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105" onClick={handleClick}>
      {image && image.length > 0 ? (
        <img src={image[0]} alt={title} className="w-[287px] h-[241px] object-cover rounded-t-lg" />
      ) : (
        <img src="/images/products/no-image.jpg" alt="no image" className="w-[287px] h-[241px] object-cover rounded-t-lg" />
      )}
      <div className="px-3 py-2">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-xl font-semibold mt-2">${productPrice}</p>
        <p className="text-sm mt-2">
          <span className="line-through">${price}</span>
          <span className="text-red-500 ml-2">{discount}% off</span>
        </p>
      </div>
    </div>
  );
}
