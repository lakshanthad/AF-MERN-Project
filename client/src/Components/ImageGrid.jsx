import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/ImageGrid.css";

export default function ImageGrid() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8070/imageTest/images"
        );
        setImages(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="image-grid">
      {images.map((image) => (
        <div key={image._id} className="image-card">
          <img src={image.image} alt={image.title} />
          <h2>{image.title}</h2>
        </div>
      ))}
    </div>
  );
}
