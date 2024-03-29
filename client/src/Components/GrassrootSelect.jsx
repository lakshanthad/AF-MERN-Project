
import "./css/agriSection.css";

export default function GrassrootSelect() {
  const images = [
    {
      src: "./Assets/homePage/grassAdmin.png",
      alt: "admin1",
      text: "Grassroot Officer",
      link: "/grasstypeselect"
   
    },
    {
      src: "./Assets/homePage/animgrass.png",
      alt: "staff2",
      text: "Ministry Staff",
      link: "/agriServices"
    },
    
  ];

  return (
    <div className="gallery-container">
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
  );
}
