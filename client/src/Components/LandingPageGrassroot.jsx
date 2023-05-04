import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiLock } from "react-icons/fi";

export default function LandingPageGrassroot() {
  return (
    <div>
      <style>{`body { background-color: #d4f1d4; }`}</style>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-6">
            <form
              style={{
                border: "5px solid #1a8b1f",
                padding: "20px",
                borderRadius: "15px",
                backgroundColor: "#e6ffe6",
                marginTop:"100px"
              }}
            >
              <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                Login to Your Account
              </h2>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">
                  Email address
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">@</span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Email address"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FiLock />
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Password"
                  />
                </div>
              </div>
              <center>
                <button
                  type="submit"
                  className="btn btn-success btn-block"
                  style={{ marginTop: "20px" }}
                >
                  Login
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


