import React from "react";

export default function NavLandingGrass() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#1a8b1f" }}>
      <div className="container-fluid navCss">
        <a className="navbar-brand" href="#">
          NAVBAR - Grassroot
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}
