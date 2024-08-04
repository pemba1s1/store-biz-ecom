import { useEffect, useState } from "react"
import { Product } from "../../../types/types"
import axiosInstance from "../../../utils/axiosInstance"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export default function AdminProduct() {
  const navigate = useNavigate()
  const [products, setProducts] = useState<Product[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [productIdToDelete, setProductIdToDelete] = useState<string | null>(null)

  useEffect(() => {
    axiosInstance.get('/product')
    .then((res) => {
      setProducts(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  const deleteProduct = () => {
    if (!productIdToDelete) return

    axiosInstance.delete(`/product/${productIdToDelete}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(() => {
      setProducts(products.filter(product => product._id !== productIdToDelete))
      toast.success("Product deleted successfully")
      setIsModalOpen(false)
      setProductIdToDelete(null)
    })
    .catch((err) => {
      console.log(err)
      toast.error("Failed to delete product")
    })
  }

  const openModal = (id: string) => {
    setProductIdToDelete(id)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setProductIdToDelete(null)
  }

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
                <button className="bg-blue-500 text-white px-4 py-1 rounded-md" onClick={() => navigate(`/product/${product._id}`)}>View</button>
                <button className="bg-blue-500 text-white px-4 py-1 rounded-md" onClick={() => navigate(`/product/edit/${product._id}`)}>Edit</button>
                <button className="bg-red-500 text-white px-4 py-1 rounded-md" onClick={() => openModal(product._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-md">
            <h2 className="text-xl mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete this product?</p>
            <div className="flex justify-end gap-4 mt-4">
              <button className="bg-gray-500 text-white px-4 py-1 rounded-md" onClick={closeModal}>Cancel</button>
              <button className="bg-red-500 text-white px-4 py-1 rounded-md" onClick={deleteProduct}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}