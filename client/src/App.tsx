
import { Route, Routes } from 'react-router-dom';
import Footer from './component/footer'
import Navbar from './component/navbar'
import ErrorPage from './pages/error-page/index.tsx'
import Home from './pages/home/index.tsx';
import ProductDetailPage from './pages/product-detail/index.tsx';
import Cart from './pages/cart/index.tsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
