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
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: "20px" }}>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <b>Articles-Agri</b>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <b>Articles-Animal</b>
          </a>
        </li>
      </ul>
      <div className="ml-auto">
        <button
          className="btn btn-outline-light me-2"
          type="button"
          onClick={handleAddNew}
        >
          Add New
        </button>
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
    </div>
  </nav>
  );
}
