
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import useStoreBizStore from '../../store/store';

export default function PaymentForm () {
  const stripe = useStripe();
  const elements = useElements();
  const { cartTotal } = useStoreBizStore();

  const [message, setMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

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
        return_url: `${window.location.origin}/completion`,
      },
    });

    if ((error.type === "card_error" || error.type === "validation_error") && error.message) {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement id="payment-element"/>
      <button 
        disabled={isProcessing || !stripe || !elements} 
        id="submit"
        className='text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse'>
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
