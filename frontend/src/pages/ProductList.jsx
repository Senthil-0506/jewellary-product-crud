import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../axios";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch products from the backend
  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setErrorMessage("Failed to load products");
    }
  };

  // Handle deleting a product
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await api.delete(`/products/${id}`);
        setProducts(products.filter((product) => product._id !== id));
      } catch (error) {
        console.error("Error deleting product:", error);
        setErrorMessage("Failed to delete product");
      }
    }
  };

  // Handle navigating to the edit page for a product
  const handleUpdate = (id) => {
    navigate(`/edit-product/${id}`);
  };

  return (
    <div className="product-container">
      <h2 className="product-title">Our Products</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <div className="product-row">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <span className="product-badge">New</span>
            <div className="product-img-wrapper">
              <img
                src={`http://localhost:5000/uploads/${product.image}`}
                alt={product.name}
                className="product-img"
              />
            </div>
            <div className="product-info">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">
                {product.description.length > 60
                  ? product.description.substring(0, 60) + "..."
                  : product.description}
              </p>
              <p className="card-text">
                <strong>Category:</strong> {product.category}
              </p>
              <p className="product-price">₹{product.price}</p>

              <button
                className="product-btn-edit"
                onClick={() => handleUpdate(product._id)}
              >
                Edit
              </button>
              <button
                className="product-btn-delete"
                onClick={() => handleDelete(product._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
