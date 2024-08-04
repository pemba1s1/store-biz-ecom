import { useEffect, useState } from "react";
import { Product } from "../../../types/types";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";

export default function AdminProductView() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axiosInstance.get(`/product/${id}`).then((res) => {
      const product = res.data;
      console.log(res.data);
      setProduct(product);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
    });
  },[id])
  return (
    <div className="w-[70%] mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-5">Product Details</h1>
      {loading ? 
      <p>Loading...</p> :
      <div className="flex justify-between">
        <div className="w-[40%] flex flex-col items-center">
          {product?.image && product.image.length > 0 ? (
            <>
              <img src={product.image[ 0 ]} alt={product.title} className="w-full object-cover rounded-lg" />
              <div className="flex gap-2 w-full overflow-hidden mt-3">
                {product.image.map((img, index) => (
                  <img src={img} alt={product.title} className="w-[24%] object-cover rounded-lg" key={`${ index }-${ product.title }`} />
                ))}
              </div>
            </>
          ) : (
            <img src="/images/products/no-image.jpg" alt="no image" className="w-full h-96 object-cover rounded-t-lg" />
          )}          
        </div>
        <div className="w-1/2 ml-5">
          <h1 className="text-2xl font-bold">{product?.title}</h1>
          <p className="text-lg mt-3">Price: ${product?.price}</p>
          <p className="text-lg mt-3">Discount: {product?.discount}%</p>
          <p className="text-lg mt-3">Stock: {product?.stock}</p>
          <p className="text-lg mt-3">Category: {product?.category}</p>
          <p className="text-lg mt-3">Description: {product?.description}</p>
        </div>
      </div>}
    </div>
  )
}