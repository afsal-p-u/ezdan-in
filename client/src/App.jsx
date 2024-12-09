import { Routes, Route, Navigate } from "react-router-dom";
import { Cart, Checkout, Home, Product, Products, TermsAndConditions } from "./pages";
import { Footer, Navbar, SignIn, SignUp } from "./components";
import { useAuthContext } from "./contexts/AuthContext";
import { useEffect, useState } from "react";
import apiRequest from "./lib/apiRequest";

function App() {
  const { user, redirect } = useAuthContext();
  const [data, setData] = useState(null);

  const getAllProducts = () => {
    apiRequest
      .get("/product")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={user ? <Checkout /> : <Navigate to="/cart" />} />
        <Route path="/products" element={<Products data={data} />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
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
