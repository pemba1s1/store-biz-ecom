import { Product } from "../../types/types";
import ProductCard from "../product-card";

interface ProductCardSliderProps {
  products: Product[];
}

export default function ProductCardSlider({ products } : ProductCardSliderProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  )
}