import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Blog.css";
import UpdateAgriBlog from "./UpdateAgriBlog";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import axios from "axios";

const AgriBlog = () => {
  const [id, setID] = useState("");
  const [title, setTitle] = useState("");
  const [articlebody, setArticlebody] = useState("");
  const [image, setImage] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const navigate = useNavigate();
  
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
  
  const handleDeleteClick = () => {
    setIsDeleteDialogOpen(true);
  };
  
  const handleDeleteConfirm = () => {
    axios
      .delete(`http://localhost:8070/agriBlog/images/${id}`)
      .then(() => {
        console.log("Deleted");
        navigate("/agriServices");
      })
      .catch((error) => {
        console.error(error);
      });
    setIsDeleteDialogOpen(false);
  };
  
  const handleDeleteCancel = () => {
    setIsDeleteDialogOpen(false);
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
              onClick={handleDeleteClick}
            >
              Delete
            </Button>
          </div>
          <Dialog
            open={isDeleteDialogOpen}
            onClose={handleDeleteCancel}
          >
            <DialogTitle>{"Are you sure you want to delete this post?"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                This action cannot be undone.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDeleteCancel} color="primary">
                Cancel
              </Button>
              <Button onClick={handleDeleteConfirm} color="secondary" autoFocus>
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </div>
  );
};

export default AgriBlog;
