import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-wrapper d-flex justify-content-center align-items-center">
      <div className="home-card card p-5 shadow-lg d-flex flex-column text-center">
        <div className="welcome-icon mb-4 mx-auto">
          <i className="bi bi-gem fs-1 text-primary"></i>
        </div>
        <h1 className="mb-3 fw-bold">Welcome to Jewellery Management</h1>
        <p className="fs-5 mb-4 text-dark">
          Easily add, manage, and browse your jewellery inventory with elegance
          and ease.
        </p>

        <div className="mt-auto d-flex justify-content-center gap-4 flex-wrap action-buttons">
          <Link to="/add-product" className="custom-btn add-btn">
            ➕ Add Product
          </Link>
          <Link to="/product-list" className="custom-btn view-btn">
            📦 View Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
