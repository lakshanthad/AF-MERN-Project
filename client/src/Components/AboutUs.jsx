// import React from "react";
import "./css/aboutus.css";

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-section">
        <div className="about-us-title">
          <h1>About Us</h1>
        </div>
        <p>
          Welcome to the Sabaragamuwa Ministry website! We are your premier
          source for
        </p>
        <p>
          comprehensive data and information on animal production and health, as
          well as agriculture
        </p>
        <p>
          in our province. Our mission is to provide valuable insights and
          resources to empower
        </p>
        <p>
          farmers, researchers, and the general public. Through our articles, we
          aim to enhance
        </p>
        <p>
          awareness and understanding of the vibrant animal and agricultural
          sectors in
        </p>
        <p>
          Sabaragamuwa. Explore our website to stay informed and engaged with
          the latest
        </p>
        <p>
          developments, best practices, and initiatives shaping our region's
          animal and agricultural landscape.
        </p>

        <p>Thank you for choosing us!</p>
        <div className="images-container">
          <img src="../Assets/homePage/logo.jpg" alt="national-logo" />
          <img src="../Assets/homePage/tikiri.jpg" alt="national-logo" />
          <img src="../Assets/homePage/flag.png" alt="sabaragamuwa-flag" />
        </div>
      </div>
    </div>
  );
}
