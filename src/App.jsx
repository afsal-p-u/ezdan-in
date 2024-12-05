import { Routes, Route } from 'react-router-dom'

import { Cart, Checkout, Home, Product, Products } from './pages'
import { Footer, Navbar } from './components'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product' element={<Product />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
