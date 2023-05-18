import { Link } from "react";
import "./css/agriSection.css";

export default function AgriSections() {
  const images = [
    {
      src: "./Assets/agriSections/chicken.png",
      alt: "Chicken",
      text: "Chicken",
    },
    {
      src: "./Assets/agriSections/cow.png",
      alt: "Cow",
      text: "Beef Production",
    },
    {
      src: "./Assets/agriSections/egg.png",
      alt: "Egg",
      text: "Egg Production",
    },
    {
      src: "./Assets/agriSections/goat.png",
      alt: "Goat",
      text: "Goat Meat Production",
    },
    {
      src: "./Assets/agriSections/milk.png",
      alt: "Milk",
      text: "Milk Production",
    },
    {
      src: "./Assets/agriSections/pig.png",
      alt: "Pig",
      text: "Pork Production",
    },
  ];

  return (
    <div className="gallery-container">
      <div className="gallery">
        {images.map((image, index) => (
          <div className="image-container" key={index}>
            <a href={image.src}>
              <img src={image.src} alt={image.alt} />
            </a>
            <div className="text-container">{image.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
