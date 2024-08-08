
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '../../../../component/PaymentForm';
import useStoreBizStore from '../../../../store/store';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

export default function Payment() {
  const { cartTotal } = useStoreBizStore();

  return (
    <>
    {stripePromise && (
      <Elements stripe={stripePromise} options={{ 
        mode: 'payment',
        amount:  parseFloat(cartTotal)* 100,
        currency: 'cad',
       }}>
        <PaymentForm />
      </Elements>
    )}
    </>
  );
}