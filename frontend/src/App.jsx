// client/src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EditProduct from "./pages/EditProduct"

const App = () => {
  return (
    <Router>
      <Navbar />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/login" element={<Login />} /> {/* Add login route */}
          <Route path="/register" element={<Register />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />

         
        </Routes>
      </>
    </Router>
  );
};

export default App;
