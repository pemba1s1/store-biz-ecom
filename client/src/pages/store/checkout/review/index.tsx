import Price from "../../../../component/price";
import useStoreBizStore from "../../../../store/store";

export default function OrderReview () {
  const { shippingInformation, cartItems } = useStoreBizStore();
  return (
    <div className="w-[60%]">
      <div className="bg-gray-100 w-full p-4">
        <p className="font-bold">Shipping Address</p>
        <div className="mt-2">
          <p className="font-semibold">{shippingInformation.fullName} {shippingInformation.address}</p>
          <p className="text-sm">{shippingInformation.email}</p> 
          <p className="text-sm">{shippingInformation.address}</p>
          <p className="text-sm">{shippingInformation.city}, {shippingInformation.province}</p>
        </div>
      </div>
      <div className="mt-5">
        <p className="font-bold">Delivery Products</p>
        <div className="mt-2">
          {
            cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b-2 py-2">
                <div className="flex items-center gap-8">
                  {item.image && item.image.length > 0 ? (
                    <img src={item.image[0]} alt={item.title} className="w-16 h-16 object-cover rounded-lg"/>
                  ):(
                    <img src="/images/products/no-image.jpg" alt="no image" className="w-16 h-16 object-cover rounded-lg" />
                  )}
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <Price price={parseFloat(item.price)} discount={parseFloat(item.discount? item.discount : "")} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}