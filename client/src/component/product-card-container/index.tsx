
import { Link } from "react-router-dom";
import ProductCardSlider from "../product-card-slider";

const discountedProducts = [
  {
    id: "0",
    image: ["/images/products/1.png","/images/products/2.png","/images/products/3.png","/images/products/1.png","/images/products/2.png"],
    title: "Product 1",
    price: "19.99",
    originalPrice: "29.99",
    discount: "30"
  },
  {
    id: "1",
    image: ["/images/products/2.png","/images/products/3.png","/images/products/1.png","/images/products/2.png"],
    title: "Product 2",
    price: "24.99",
    originalPrice: "39.99",
    discount: "38"
  },
  {
    id: "2",
    image: ["/images/products/3.png","/images/products/1.png","/images/products/2.png"],
    title: "Product 3",
    price: "29.99",
    originalPrice: "49.99",
    discount: "40"
  },
  {
    id: "3",
    image: ["/images/products/1.png","/images/products/2.png","/images/products/3.png","/images/products/1.png","/images/products/2.png"],
    title: "Product 1",
    price: "19.99",
    originalPrice: "29.99",
    discount: "30"
  },
  {
    id: "4",
    image: ["/images/products/2.png","/images/products/3.png","/images/products/1.png","/images/products/2.png"],
    title: "Product 2",
    price: "24.99",
    originalPrice: "39.99",
    discount: "38"
  },
  {
    id: "5",
    image: ["/images/products/3.png","/images/products/1.png","/images/products/2.png"],
    title: "Product 3",
    price: "29.99",
    originalPrice: "49.99",
    discount: "40"
  }, 
]

interface ProductCardContainerProps {
  title: string;
  url?: string;
}

export default function ProductCardContainer({ title, url }: ProductCardContainerProps) {
  return (
    <div className="store-biz-container">
        <div className="flex justify-between my-5">
          <span className="text-xl font-bold">{ title }</span>
          {url && <Link to={ url } className="text-black">View all</Link>}
        </div>
        <ProductCardSlider products={discountedProducts} />
    </div>
  )
}