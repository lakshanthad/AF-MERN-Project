import { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default function UpdateAgriBlog() {
  const [ID, setID] = useState("");
  const [title, setTitle] = useState("");
  const [articleBody, setArticleBody] = useState("");
  const [image, setImage] = useState("");

  const sendDataToUpdate = () => {
    axios.put(`http://localhost:8070/agriBlog/images` + ID, {
      title,
      articleBody,
      image,
    });
  };

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setTitle(localStorage.getItem("title"));
    setArticleBody(localStorage.getItem("articleBody"));
    setImage(localStorage.getItem("image"));
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Article Body"
        value={articleBody}
        onChange={(e) => setArticleBody(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={10}
      />
      <TextField
        label="Image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
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
}
