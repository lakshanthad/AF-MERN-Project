// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Animal from './Components/AnimalProduction/Animal';
import Beef from './Components/AnimalProduction/Beef';
import Test from './Components/AnimalProduction/Test';
import LandingPageGrassroot from "./Components/LandingPageGrassroot";
import LandingPageStaff from "./Components/LandinPageStaff";
import NavLandingStaff from "./Components/NavLandingStaff";
import NavLandingGrass from "./Components/NavLandingGrass";
import SelectionPage from "./Components/SelectionPage";
import AnimalDataTable from "./Components/AnimalDataTable";
import AgriDataTable from "./Components/AgriDataTable";
import AnimalGrassNavbar from "./Components/AnimalGrassNavbar";
import AgriGrassNavbar from "./Components/AgriGrassNavbar";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Animal/>}></Route>
        <Route path="/beef" element={<Beef/>}></Route>
        <Route path="/test" element={<Test/>}></Route>
        <Route path="/animal" element={<Animal />}></Route>
        <Route path="/landingStaff" element={ <> <NavLandingStaff/> <LandingPageStaff /></> }></Route>
        <Route path="/landingGrassroot" element={ <> <NavLandingGrass/> <LandingPageGrassroot /> </>}></Route>
        <Route path="/selectionPage" element={<SelectionPage/>}></Route>
        <Route path="/AnimalDataTable" element={<>  <AnimalGrassNavbar/> <AnimalDataTable/> </>}/>
        <Route path="/agriTable" element={<><AgriGrassNavbar/> <AgriDataTable/></>}/>
       
      </Routes>
    </Router>
  );
}
