// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Animal from './Components/Animal';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Animal/>}></Route>
      </Routes>
    </Router>
  );
}