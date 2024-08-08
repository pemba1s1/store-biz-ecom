
export default function Price ({ price, discount = 0 }: { price: number, discount?: number }) {
  const calculatedPrice = price - (price * discount / 100);
  return (
    <div className="">
      <p className="text-lg font-semibold">${ calculatedPrice.toFixed(2) }</p>
      {discount > 0 && (
        <p className="text-sm line-through text-gray-500 ml-2">${ price.toFixed(2) }</p>
      )}
    </div>
  );
}