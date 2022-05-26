import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { Context } from "./Context";

function App() {
  const [cartTotal, setCartTotal] = useState(0);
  return (
    <>
      <Context.Provider
        value={{
          cartTotal: cartTotal,
          setCartTotal: setCartTotal,
        }}
      >
        <Navbar />
        <Header />
        <Section />
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
