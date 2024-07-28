
type QuantityInputProps = {
  quantity: number;
  handleQuantityChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  quantityInputType: string;
}

export default function QuantityInput({ quantity, handleQuantityChange, quantityInputType } : QuantityInputProps) {
  return (
    <>
      { quantityInputType === "select" ? 
      <select 
        className="px-5 py-2 border w-[120px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
        value={quantity} 
        onChange={handleQuantityChange}
      >
        <option value="1">Qty: 1</option>
        <option value="2">Qty: 2</option>
        <option value="3">Qty: 3</option>
        <option value="4">Qty: 4</option>
        <option value="5">Qty: 5</option>
        <option value="6">Qty: 6</option>
        <option value="7">Qty: 7</option>
        <option value="8">Qty: 8</option>
        <option value="9">Qty: 9</option>
        <option value="more">Qty: More than 10</option>
      </select>
      :
      <input type="number" value={quantity} onChange={handleQuantityChange} className="px-5 py-2 border w-[120px] text-center border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 no-spinners" />
      }
    </>
  )
}