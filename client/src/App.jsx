import { Routes, Route, Navigate } from "react-router-dom";
import { Cart, Checkout, Home, OrderConfirmation, Product, Products, TermsAndConditions } from "./pages";
import { Footer, MobileMenu, Navbar, SignIn, SignUp } from "./components";
import { useAuthContext } from "./contexts/AuthContext";
import { useEffect, useState } from "react";
import apiRequest from "./lib/apiRequest";

function App() {
  const { user, redirect, setRedirect } = useAuthContext();
  const [data, setData] = useState();

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
        <Route path="/checkout" element={user ? <Checkout /> : <Cart />} />
        <Route path="/products" element={<Products data={data} />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/order" element={<OrderConfirmation />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
      <MobileMenu />

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
