
import { useForm, SubmitHandler } from 'react-hook-form';
import { Product } from '../../../types/types';
import { useState } from 'react';
import { supabase } from '../../../utils/supabaseClient';
import { generateRandomString } from '../../../utils/random';
import axiosInstance from '../../../utils/axiosInstance';
import { toast } from 'react-toastify';
import LoadingSpinner from '../../../component/loading-spinner';

export default function AdminProductAdd() {
  const { register, handleSubmit, formState: { errors } } = useForm<Product>();
  const [ images, setImages ] = useState<File[]>([]);
  const [ processing, setProcessing ] = useState(false);

  const onSubmit: SubmitHandler<Product> = async data => {
    setProcessing(true);
    const imageUrls = await uploadImages();
    console.log(imageUrls);
    axiosInstance.post('/product', {
      ...data,
      image: imageUrls
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(() => {
      toast.success("Product added successfully");
    }).catch(() => {
      toast.error("Failed to add product");
    });
    setProcessing(false);
  };

  const uploadImages = async () => {
    const imageUrls: string[] = [];
    
    for (const fileList of images) {
      for (const image of fileList) {
        console.log(image);
        const randomName = `${Date.now()}-${generateRandomString(10)}-${image.name}`;
        await supabase.storage.from('images').upload(randomName, image);
        const url = supabase.storage.from('images').getPublicUrl(randomName).data.publicUrl;
        console.log(url)
        imageUrls.push(url);
      }
    }
    return imageUrls;
  }

  const handleFileChange = async (e) => {
    const files = e.target.files;
    if (!files) return;
    images.push(files);
    if (files) {
      setImages(images);
    }    
  }

  return (
    <div className="w-[60%] mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block">Title</label>
          <input {...register('title', { required: true })} className="border border-gray-300 px-2 py-1 rounded w-full" />
          {errors.title && <p className="text-red-500">This field is required</p>}
        </div>
        <div>
          <label className="block">Price</label>
          <input {...register('price', { required: true })} className="border border-gray-300 px-2 py-1 rounded w-full" />
          {errors.price && <p className="text-red-500">This field is required</p>}
        </div>
        <div>
          <label className="block">Description</label>
          <textarea {...register('description')} className="border border-gray-300 px-2 py-1 rounded w-full" />
        </div>
        <div>
          <label className="block">Discount</label>
          <input {...register('discount')} className="border border-gray-300 px-2 py-1 rounded w-full" />
        </div>
        <div>
          <label className="block">Category</label>
          <input {...register('category')} className="border border-gray-300 px-2 py-1 rounded w-full" />
        </div>
        <div>
          <label className="block">Stock</label>
          <input type="number" {...register('stock')} className="border border-gray-300 px-2 py-1 rounded w-full" />
        </div>
        <div>
          <label className="block">Images</label>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="border border-gray-300 px-2 py-1 rounded w-full"
        />
        </div>
        <div className='flex gap-2 items-center'>
          <button disabled={processing} type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{processing ? "Adding" : "Add Product"}</button>
          {processing && <LoadingSpinner className='h-8 w-8'/>}
        </div>
      </form>
    </div>
    );
}