import React, { useState } from "react";
import axios from "axios";

export default function TestImageForm() {
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
    } catch (error) {
      setError(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {image && <img src={image.image} alt={image.title} />}
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <label>
        Choose image:
        <input type="file" onChange={handleFileChange} />
      </label>
      <button type="submit" disabled={!file || loading}>
        Upload
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}
