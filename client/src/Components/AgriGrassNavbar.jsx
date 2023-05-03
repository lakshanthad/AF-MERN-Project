import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AgriGrassNavbar() {
  const navigate = useNavigate();

  const handleAddNew = () => {
    navigate("/animal");
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#1a8b1f" }}
    >
      <div className="container-fluid navCss">
        NAVBAR - Grass - Agri
        <div className="ml-auto">
          <button
            className="btn btn-outline-light me-2"
            type="button"
            onClick={handleAddNew}
          >
            Add New
          </button>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
      </div>
    </nav>
  );
}
