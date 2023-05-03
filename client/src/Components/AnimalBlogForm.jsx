import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Input, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../Components/css/Blogform.css";

const useStyles = makeStyles({
  textField: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "green", // change the border color when focused
    },
  },
});

export default function AnimalBlogForm() {
  const classes = useStyles();

  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Thumbnail, setThumbnail] = useState([]);

  useEffect(() => {
    axios
      .get("/api/category/all")
      .then((cat) => {
        console.log(cat.data.categories);
        setCategories(cat.data.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //handle and convert it in base 64
  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
    console.log(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setThumbnail(reader.result);
    };
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8070/animalblog/add",
        {
          Title,
          Description,
          Thumbnail,
        }
      );
      if (data.success === true) {
        setTitle("");
        setDescription("");
        setThumbnail("");
        toast.success("product created successfully");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="animalblogform">
      <p className="formTopic">Animal Extension Service Blog</p>
      <form onSubmit={submitForm}>
        <TextField
          id="filled-basic"
          label="Title"
          className={classes.textField}
        />
        <br />
        <br />
        <br />

        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={10}
          style={{ width: "100%" }}
          className={classes.textField}
        />
        <br />
        <br />
        <br />
        <Input type="file" onChange={handleImage} />
        <br />
        <br />
        <br />
        <Button
          variant="contained"
          size="large"
          style={{ backgroundColor: "green", color: "white", width: "20%" }}
        >
          Post
        </Button>
      </form>
    </div>
  );
}
