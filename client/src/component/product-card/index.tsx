import { useNavigate } from "react-router-dom";
import { Product } from "../../types/types";
import { useEffect, useState } from "react";

export default function ProductCard(product : Product) {
  const navigate = useNavigate();
  const [productPrice, setProductPrice] = useState("");

  useEffect(() => {
    if(product.discount) setProductPrice((parseFloat(product.price) - (parseFloat(product.price) * (parseFloat(product.discount) / 100))).toFixed(2));
    else setProductPrice(product.price);
  }, [product.discount]);

  const handleClick = () => {
    navigate(`/product/${product._id}`);
  }

  return (
    <div className="border rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105" onClick={handleClick}>
      {product.image && product.image.length > 0 ? (
        <img src={product.image[0]} alt={product.title} className="w-[287px] h-[241px] object-cover rounded-t-lg" />
      ) : (
        <img src="/images/products/no-image.jpg" alt="no image" className="w-[287px] h-[241px] object-cover rounded-t-lg" />
      )}
      <div className="px-3 py-2">
        <h2 className="text-lg font-bold">{product.title}</h2>
        <p className="text-xl font-semibold mt-2">${productPrice}</p>
        {product.discount &&
          <p className="text-sm mt-2">
            <span className="line-through">${product.price}</span>
            <span className="text-red-500 ml-2">{product.discount}% off</span>
          </p>
        }
      </div>
    </div>
  );
}
