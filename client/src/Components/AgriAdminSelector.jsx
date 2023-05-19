import { Link } from "react";
import "./css/agriSection.css";

export default function AgriAdminSelector() {
  const images = [
    {
      src: "./Assets/agriSections/rice.png",
      alt: "rice",
      text: "Rice Production",
      link: "/vrice"
    
    },
    {
      src: "./Assets/agriSections/fruits.png",
      alt: "fruits",
      text: "Fruit Production",
    },
    {
      src: "./Assets/agriSections/vege.png",
      alt: "vegetables",
      text: "Vegetable Production",
      link: "/vvegi"
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div className="gallery-container" style={{ marginBottom: "10px" }}>
        <div className="gallery">
          {images.map((image, index) => (
            <div className="image-container" key={index}>
              <a href={image.link}>
                <img src={image.src} alt={image.alt} />
              </a>
              <div className="text-container">{image.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
