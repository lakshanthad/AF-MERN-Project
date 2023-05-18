
import "./css/agriSection.css";

export default function GrassAdminSelect() {
  const images = [
    {
      src: "./Assets/homePage/grassAdmin.png",
      alt: "admin1",
      text: "Agriculture Data",
      link: "/sagrisection"
      
   
    },
    {
      src: "./Assets/agriSections/cow.png",
      alt: "staff2",
      text: "Animal Data",
      link: "/sanimsection"
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
