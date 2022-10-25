import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//PAGES
import ProductListPage from "./pages/ProductListPage";
import ProductDisplayPage from "./pages/ProductDisplayPage";

import CartPage from "./pages/CartPage";

import Header from "./components/Header";

import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<ProductListPage />} />

        <Route exact path="/products/:id" element={<ProductDisplayPage />} />

        <Route exact path="/cart" element={<CartPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
