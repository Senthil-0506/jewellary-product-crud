import React from "react";
import ProductForm from "../components/ProductForm";
import "./AddProduct.css"; // Custom styles

const AddProduct = () => {
  return (
    <div className="add-product-wrapper">
      <div className="add-product-card">
        <ProductForm />
      </div>
    </div>
  );
};

export default AddProduct;
