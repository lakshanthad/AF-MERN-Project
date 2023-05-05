// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Animal from "./Components/Animal";
import AnimalBlogLogin from "./Components/AnimalBlogLogin";
import TestImageForm from "./Components/TestImageForm";
import ImageGrid from "./Components/ImageGrid";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Animal />}></Route>
        <Route path="/animallogin" element={<AnimalBlogLogin />}></Route>

        <Route path="/testimage" element={<TestImageForm />}></Route>

        <Route path="/allimages" element={<ImageGrid />}></Route>
      </Routes>
    </Router>
  );
}
