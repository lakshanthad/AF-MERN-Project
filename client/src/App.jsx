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
import AnimalServices from "./Components/AnimalServices";
import SelectionPageStaff from "./Components/SelectionPageStaff";
import AnimalStaffNavbar from "./Components/AnimalStaffNavbar";
import AgriStaffNavbar from "./Components/AgriStaffNavbar";
import ImageGridAgri from "./Components/ImageGridAgri";
import AgriBlogForm from "./Components/AgriBlogForm";
import AgriBlog from "./Components/AgriBlog";
import UpdateAgriBlog from "./Components/UpdateAgriBlog";
import ImageGridAgriUser from "./Components/ImageGridAgriUser";


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
        <Route path="/animalServices" element={<><AnimalStaffNavbar/><AnimalServices/></>}/>
        <Route path="/selectionStaff" element={<SelectionPageStaff/>}/>
        <Route path="/agriForm" element={<AgriBlogForm/>}/>
        <Route path="/agriServices" element={<><AgriStaffNavbar/><ImageGridAgri />  <SelectionPageStaff/> </>}></Route>
        <Route path="/agriArticle" element={<AgriBlog/>}/>
        <Route path="/agriArticleEdit" element={<UpdateAgriBlog/>}/>
        <Route path ="/agriUser" element={<ImageGridAgriUser/>}/>
      
      </Routes>
    </Router>
  );
}
