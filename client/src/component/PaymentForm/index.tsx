
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import useStoreBizStore from '../../store/store';
import OrderSummary from '../order-summary';

export default function PaymentForm () {
  const stripe = useStripe();
  const elements = useElements();
  const { cartTotal } = useStoreBizStore();

  const [message, setMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async () => {
    if (!stripe || !elements) {
      return;
    }

    const {error: submitError} = await elements.submit();
    if (submitError?.message) {
      setMessage(submitError.message);
      return;
    }
    
    setIsProcessing(true);

    const res = await axiosInstance.post('/payment/create-payment-intent', {
      amount: parseFloat(cartTotal) * 100
    });

    const clientSecret = await res.data.clientSecret;

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/completion/123`,
      },
    })

    if ((error.type === "card_error" || error.type === "validation_error") && error.message) {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }
    setIsProcessing(false);
  };

  return (
    <>
      <form>
        <PaymentElement id="payment-element"/>
        {message && <div className='text-red-600'>{message}</div>}
      </form>
      <OrderSummary handleClick={handleSubmit} btnText={isProcessing ? "Placing Order" : "Place Order"} disabled={isProcessing || !stripe || !elements} />
    </>
  );
}
