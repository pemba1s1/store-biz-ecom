
import { Link } from "react-router-dom";
import ProductCardSlider from "../product-card-slider";
import { useEffect, useState } from "react";
import { Product } from "../../types/types";
import axiosInstance from "../../utils/axiosInstance";

interface ProductCardContainerProps {
  title: string;
  url?: string;
  endpoint: string;
}

export default function ProductCardContainer({ title, url, endpoint }: ProductCardContainerProps) {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    axiosInstance.get(endpoint)
    .then((res) => {
      setProducts(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div className="store-biz-container">
        <div className="flex justify-between my-5">
          <span className="text-xl font-bold">{ title }</span>
          {url && <Link to={ url } className="text-black">View all</Link>}
        </div>
        <ProductCardSlider products={products} />
    </div>
  )
}