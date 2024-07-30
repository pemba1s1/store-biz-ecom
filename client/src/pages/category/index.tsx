
import { useParams } from "react-router-dom";
import ProductListContainer from "../../component/product-list-container";
import { Category } from "../../constants/category";
import { Filters } from "../../types/types";
import { useEffect, useState } from "react";


export default function CategoryPage() {
  const params = useParams();
  const [filters, setFilters] = useState<Filters>();

  // const handleFilterChange = (e) => {
  //   const { name, value } = e.target;
  //   setFilters(prevFilters => ({
  //     ...prevFilters,
  //     [name]: value,
  //   }));
  // };

  useEffect(() => {
    setFilters({
      category: params.category
    })
  },[params.category]);

  return (
    <>
      <div className="bg-[#f1f1f1]">
        <p className="store-biz-container text-3xl py-3 mb-3 font-bold">{ params.category && Category[params.category] }</p>
      </div>
      <div className="store-biz-container flex justify-center gap-5">
        {/* <div className="w-[20%]">
          <div className="flex justify-between bg-[#f1f1f1] px-5 items-center h-[70px] rounded-lg mb-2">
            <p className="text-lg font-semibold">Filter</p>
          </div>
          <div className="bg-white p-5 rounded-lg">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Price Range</label>
              <input type="range" name="priceRange" min="0" max="1000" value={filters.priceRange.min} onChange={handleFilterChange} />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Brand</label>
              <input type="text" name="brand" value={filters.brand} onChange={handleFilterChange} className="border px-3 py-1 rounded-md w-full" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Rating</label>
              <select name="rating" value={filters.rating} onChange={handleFilterChange} className="border px-3 py-1 rounded-md w-full">
                <option value="0">All Ratings</option>
                <option value="1">1 Star & Up</option>
                <option value="2">2 Stars & Up</option>
                <option value="3">3 Stars & Up</option>
                <option value="4">4 Stars & Up</option>
                <option value="5">5 Stars</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Availability</label>
              <select name="availability" value={filters.availability} onChange={handleFilterChange} className="border px-3 py-1 rounded-md w-full">
                <option value="in-stock">In Stock</option>
                <option value="out-of-stock">Out of Stock</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Color</label>
              <input type="text" name="color" value={filters.color} onChange={handleFilterChange} className="border px-3 py-1 rounded-md w-full" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Size</label>
              <input type="text" name="size" value={filters.size} onChange={handleFilterChange} className="border px-3 py-1 rounded-md w-full" />
            </div>
          </div>
        </div> */}
        {filters && <ProductListContainer {...filters}/> }
      </div>
    </>
  )
}