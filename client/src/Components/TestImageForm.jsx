import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Input, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { toast } from "react-toastify";
import "../Components/css/Blogform.css";

const useStyles = makeStyles({
  textField: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "green", // change the border color when focused
    },
  },
});

export default function TestImageForm() {
  const classes = useStyles();

  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("title", title);
      formData.append("articlebody", title);

      const response = await axios.post(
        "http://localhost:8070/imageTest/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setImage(response.data);
      toast.success("Article Uploaded");
    } catch (error) {
      setError(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animalblogform">
      <p className="formTopic">Add Animal Blog</p>
      <form onSubmit={handleSubmit}>
        {image && <img src={image.image} alt={image.title} />}
        <br />
        <br />
        <TextField
          id="filled-basic"
          label="Title"
          value={title}
          className={classes.textField}
          onChange={handleTitleChange}
        />
        <br />
        <br />
        <br />

        <TextField
          id="outlined-multiline-static"
          label="Article Body"
          multiline
          rows={10}
          style={{ width: "100%" }}
          className={classes.textField}
          //   onChange={handleBodyChange}
        />
        <br />
        <br />
        <br />
        <Input type="file" onChange={handleFileChange} />
        <br />
        <br />
        <br />
        <Button
          type="submit"
          variant="contained"
          size="large"
          style={{ backgroundColor: "green", color: "white", width: "20%" }}
          disabled={!file || loading}
        >
          Post
        </Button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
