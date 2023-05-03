// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Animal from "./Components/Animal";
import AnimalBlogLogin from "./Components/AnimalBlogLogin";
import AnimalBlogForm from "./Components/AnimalBlogForm";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Animal />}></Route>
        <Route path="/animallogin" element={<AnimalBlogLogin />}></Route>
        <Route path="/animalblog" element={<AnimalBlogForm />}></Route>
      </Routes>
    </Router>
  );
}
