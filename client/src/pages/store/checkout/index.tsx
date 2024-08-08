
import { useRef, useState } from "react";
import OrderSummary from "../../../component/order-summary";
import Shipping from "./shipping";
import { shippingInformationSchema } from "../../../schema/schema";
import Payment from "./payment";
import OrderReview from "./review";

export default function Checkout() {
  const [step, setStep] = useState(0);
  const triggerValidation = useRef<() => Promise<boolean>>(async () => false);

  const steps = [
    {
      title: "Shipping Information",
      breadcrumbTitle: "Shipping",
      btnText: "Continue",
      component: <Shipping triggerValidation={triggerValidation}/>,
      schema: shippingInformationSchema
    },
    {
      title: "Review your Order",
      breadcrumbTitle: "Review",
      btnText: "Proceed to Payment",
      component: <OrderReview />,
      schema: shippingInformationSchema
    },
    {
      title: "Payment Information",
      breadcrumbTitle: "Payment",
      btnText: "Place Order",
      component: <Payment />,
      schema: shippingInformationSchema
    },
  ];

  const handleClick = async () => {
    if (step == 0) {
      const isValid = await triggerValidation.current();
      if (!isValid) return;
    } else if (step == 1) {
      // Validate payment information
    } else if (step === 2) {
      // Place order
      return;
    }
    setStep(prevStep => prevStep + 1);
  };

  return (
    <>
      <div className="bg-[#f1f1f1]">
        <div className="w-[70%] mx-auto py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Checkout</h1>
          <div>
            <ul className="flex gap-6 text-lg">
              {
                steps.map((s, index) => (
                  <li key={index} className={`flex gap-2 ${index <= step ? 'font-semibold' : 'text-gray-500'}`} onClick={() => setStep(index)}>
                    <div className={` flex items-center justify-center h-[30px] w-[30px] rounded-full ${index <= step ? 'text-white bg-black' : 'border-2 border-black'} `}>{ index + 1 }</div>
                    { s.breadcrumbTitle }
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[70%] mx-auto py-8 justify-between">
          <h2 className="text-xl font-semibold mb-5">{ steps[ step ].title }</h2>
          <div className="flex justify-between">
            { steps[ step ].component }
            <OrderSummary handleClick={ handleClick } btnText={ steps[ step ].btnText }/>
          </div>
        </div>
      </div>
    </>
  )
}