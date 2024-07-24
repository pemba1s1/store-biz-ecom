
export interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  discount?: string;
}

export default function ProductCard({ image, title, price, originalPrice, discount } : ProductCardProps) {
  return (
    <div className="border rounded-lg">
      <img src={image} alt={title} className="w-[287px] h-[241px] object-cover rounded-t-lg" />
      <div className="px-3 py-2">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-xl font-semibold mt-2">{price}</p>
        <p className="text-sm mt-2">
          <span className="line-through">{originalPrice}</span>
          <span className="text-red-500 ml-2">{discount} off</span>
        </p>
      </div>
    </div>
  );
};
