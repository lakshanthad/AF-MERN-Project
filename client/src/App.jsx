import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Animal from "./Components/Animal";
import LandingPageGrassroot from "./Components/LandingPageGrassroot";
import LandingPageStaff from "./Components/LandinPageStaff";
import NavLandingStaff from "./Components/NavLandingStaff";
import NavLandingGrass from "./Components/NavLandingGrass";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/animal" element={<Animal />}></Route>
        <Route path="/landingStaff" element={ <> <NavLandingStaff/> <LandingPageStaff /></> }></Route>
        <Route
          path="/landingGrassroot" element={ <> <NavLandingGrass/> <LandingPageGrassroot /> </>}
        ></Route>
       
      </Routes>
    </Router>
  );
}
