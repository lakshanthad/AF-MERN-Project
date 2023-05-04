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

  return (
    <div className="animalblogform">
      <p className="formTopic">Animal Extension Service Blog</p>
      <form>
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
        <Input type="file" />
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
