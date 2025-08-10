import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top shadow-sm"
      style={{
        backgroundColor: "#ffffff", 
        padding: "1rem 1rem",
      }}
    >
      <div className="container-fluid">
        
        <Link
          to="/"
          className="navbar-brand fw-bold"
          style={{
            fontSize: "1.8rem",
            color: "#0149ae",
            textDecoration: "none",
          }}
        >
          Minimalist Blog
        </Link>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          style={{ fontSize: "1.1rem" }}
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4">
              <Link
                to="/"
                className="nav-link fw-bold"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link
                to="/blog"
                className="nav-link fw-bold"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link
                to="/manage-post"
                className="nav-link fw-bold"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Create Post
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
