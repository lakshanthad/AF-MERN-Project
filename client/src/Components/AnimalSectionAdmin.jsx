
import "./css/agriSection.css";

export default function AnimalSectionAdmin() {
  const images = [
    {
      src: "./Assets/agriSections/chicken.png",
      alt: "Chicken",
      text: "Chicken",
      link: "/vchicken"
    },
    {
      src: "./Assets/agriSections/cow.png",
      alt: "Cow",
      text: "Beef Production",
      link: "/vbeef"
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
