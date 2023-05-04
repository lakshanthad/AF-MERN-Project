// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Animal from './Components/AnimalProduction/Animal';
import Beef from './Components/AnimalProduction/Beef';
import Test from './Components/AnimalProduction/Test';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Animal/>}></Route>
        <Route path="/beef" element={<Beef/>}></Route>
        <Route path="/test" element={<Test/>}></Route>
      </Routes>
    </Router>
  );
}