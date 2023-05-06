import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const UpdateAgriBlog = ({
  id,
  title,
  articlebody,
  image,
  handleUpdate,
  handleCancel,
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newArticleBody, setNewArticleBody] = useState(articlebody);
  const [newImage, setNewImage] = useState(image);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", newTitle);
      formData.append("articlebody", newArticleBody);
      if (newImage) {
        formData.append("image", newImage);
      }
      const response = await axios.put(
        `http://localhost:8070/agriBlog/images/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      handleUpdate(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  const buttonStyle = {
    backgroundColor: "green",
    marginRight: "10px",
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Article Body"
        value={newArticleBody}
        onChange={(e) => setNewArticleBody(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={10}
      />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        style={buttonStyle}
      >
        Save
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleCancel}
        style={buttonStyle}
      >
        Cancel
      </Button>
    </form>
  );
};

export default UpdateAgriBlog;
