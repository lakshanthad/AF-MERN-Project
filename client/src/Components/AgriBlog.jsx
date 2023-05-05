import { useEffect, useState } from "react";
import "./css/Blog.css";
const AgriBlog = () => {
  const [title, setTitle] = useState("");
  const [articlebody, setArticlebody] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    setTitle(localStorage.getItem("title"));
    setArticlebody(localStorage.getItem("articlebody"));
    setImage(localStorage.getItem("image"));
  }, []);
  return (
    <div className="artcile-container">
      <h2 className="article-title">{title}</h2>
      <img className="blogimage" src={image} />
      <p className="articlebody">{articlebody}</p>
    </div>
  );
};

export default AgriBlog;