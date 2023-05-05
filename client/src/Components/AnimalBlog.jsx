import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AnimalBlog = () => {
  const [title, setTitle] = useState("");
  const [articlebody, setArticlebody] = useState("");
  const [image, setImage] = useState("");
  const [ID, setID] = useState(null);

  useEffect(() => {
    setTitle(localStorage.getItem("title"));
    setArticlebody(localStorage.getItem("articlebody"));
    setImage(localStorage.getItem("image"));
    setID(localStorage.getItem("ID"));
  }, []);

  return (
    <div className="artcile-container">
      <h2 className="article-title">{title}</h2>
      <img className="blogimage" src={image} />
      <p className="articlebody">{articlebody}</p>
    </div>
  );
};

export default AnimalBlog;
