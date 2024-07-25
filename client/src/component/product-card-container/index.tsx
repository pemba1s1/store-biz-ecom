
import { Link } from "react-router-dom";
import ProductCardSlider from "../product-card-slider";
import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../../types/types";

interface ProductCardContainerProps {
  title: string;
  url?: string;
  endpoint: string;
}

export default function ProductCardContainer({ title, url, endpoint }: ProductCardContainerProps) {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + endpoint)
    .then((res) => {
      setProducts(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  })

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