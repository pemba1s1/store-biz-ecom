
import ProductCard from "../product-card";
import { useEffect, useState } from "react";
import { Filters, Product } from "../../types/types";
import axiosInstance from "../../utils/axiosInstance";
 
export default function ProductListContainer(filters: Filters) {  
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    axiosInstance.get('/product', {
      params: { filters }
    }).then(res => {
      setProducts(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [filters])

  
  return (
    <div className="w-[65%]">
      <div className="flex justify-between bg-[#f1f1f1] px-5 items-center h-[70px] rounded-lg mb-2">
        <p className="text-lg font-semibold">Showing 1-12 of 100 results</p>
        <div className="flex gap-3 items-center">
          <p className="text-lg font-semibold">Sort</p>
          <select className="border px-3 rounded-md py-1">
            <option value="default">Default</option>
            <option value="price">Price Low-High</option>                
            <option value="price">Price High-Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {
          products.map((item : Product, index) => 
            <ProductCard key={index} {...item} />
          )
        }
      </div>
    </div>
  )
}