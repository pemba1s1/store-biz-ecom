
import Router from './router/router.tsx';
import Navbar from "./component/navbar";
import Footer from "./component/footer";

export default function Store() {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  )
}