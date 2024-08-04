import { useEffect, useState } from "react"
import { Product } from "../../../types/types"
import axiosInstance from "../../../utils/axiosInstance"
import { useNavigate } from "react-router-dom"

export default function AdminProduct() {
  const navigate = useNavigate()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    axiosInstance.get('/product')
    .then((res) => {
      setProducts(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <div className="w-[80%] mx-auto mt-5">
      <div className="flex justify-between mb-5">
        <h1 className="text-2xl font-bold mb-5">Products</h1>
        <button className="bg-blue-500 text-white px-4 py-1 rounded-md ml-auto" onClick={() => navigate('/product/add')}>Add Product</button>
      </div>
      <table className="w-full text-center">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Stock</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="border px-4 py-2">{product.title}</td>
              <td className="border px-4 py-2">{product.price}</td>
              <td className="border px-4 py-2">{product.category}</td>
              <td className="border px-4 py-2">{product.stock}</td>
              <td className="border px-4 py-2 flex gap-5 justify-center">
              <button className="bg-blue-500 text-white px-4 py-1 rounded-md">View</button>
                <button className="bg-blue-500 text-white px-4 py-1 rounded-md">Edit</button>
                <button className="bg-red-500 text-white px-4 py-1 rounded-md">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}