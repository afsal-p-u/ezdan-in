import { Routes, Route } from "react-router-dom";

import { Cart, Checkout, Home, Product, Products } from "./pages";
import { Footer, Navbar, SignIn, SignUp } from "./components";
import { useAuthContext } from "./contexts/AuthContext";

function App() {
  const { redirect } = useAuthContext();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />

      {redirect == "sign-in" ? (
        <SignIn />
      ) : redirect == "sign-up" ? (
        <SignUp />
      ) : (
        ''
      )}
    </>
  );
}

export default App;
