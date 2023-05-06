import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Blog.css";
import UpdateAgriBlog from "./UpdateAgriBlog";
import { Button } from "@material-ui/core";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";

const AgriBlog = () => {
  const [id, setID] = useState("");
  const [title, setTitle] = useState("");
  const [articlebody, setArticlebody] = useState("");
  const [image, setImage] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  useEffect(() => {
    setTitle(localStorage.getItem("title"));
    setArticlebody(localStorage.getItem("articlebody"));
    setImage(localStorage.getItem("image"));
    setID(localStorage.getItem("ID"));
  }, []);

  const handleEditClick = () => {
    setIsEditMode(true);
  };
  const handleUpdate = (newTitle, newArticleBody, newImage) => {
    setTitle(newTitle);
    setArticlebody(newArticleBody);
    setImage(newImage);
    setIsEditMode(false);
  };
  const handleCancel = () => {
    setIsEditMode(false);
  };
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8070/images/${id}`)
      .then(() => {
        console.log("Deleted");
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("delete function called");
  };

  return (
    <div className="artcile-container">
      {isEditMode ? (
        <UpdateAgriBlog
          title={title}
          articlebody={articlebody}
          image={image}
          handleUpdate={handleUpdate}
          handleCancel={handleCancel}
        />
      ) : (
        <>
          <h2 className="article-title">{title}</h2>
          <img className="blogimage" src={image} />
          <p className="articlebody">{articlebody}</p>
          <div className="buttons">
            <Button
              variant="contained"
              color="primary"
              onClick={handleEditClick}
              className="update-button"
            >
              Update
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className="delete-button"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default AgriBlog;
