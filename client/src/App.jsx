// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AnimalBlogLogin from "./Components/AnimalBlog/AnimalBlogLogin";
import TestImageForm from "./Components/AnimalBlog/TestImageForm";
import ImageGrid from "./Components/AnimalBlog/ImageGrid";
import AnimalBlog from "./Components/AnimalBlog/AnimalBlog";

import Animal from "./Components/AnimalProduction/Animal";
import Beef from './Components/AnimalProduction/Beef';
import Test from './Components/AnimalProduction/Test';
import Milk from "./Components/AnimalProduction/Milk";
import Egg from "./Components/AnimalProduction/Egg";
import Pork from "./Components/AnimalProduction/Pork";
import Chicken from "./Components/AnimalProduction/Chicken";
import GoatMilk from "./Components/AnimalProduction/GoatMilk";
import Goat from "./Components/AnimalProduction/Goat";
import APNavbar from "./Components/AnimalProduction/APNavbar";
import Footer from "./Components/Footer";

import LandingPageGrassroot from "./Components/LandingPageGrassroot";
import LandingPageStaff from "./Components/LandinPageStaff";
import NavLandingStaff from "./Components/NavLandingStaff";

import SelectionPage from "./Components/SelectionPage";
import AnimalDataTable from "./Components/AnimalDataTable";
import AgriDataTable from "./Components/AgriDataTable";
import AnimalGrassNavbar from "./Components/AnimalGrassNavbar";
import AgriGrassNavbar from "./Components/AgriBlog/AgriGrassNavbar";
import AnimalServices from "./Components/AnimalServices";
import SelectionPageStaff from "./Components/SelectionPageStaff";
import AnimalStaffNavbar from "./Components/AnimalStaffNavbar";
import AgriStaffNavbar from "./Components/AgriBlog/AgriStaffNavbar";
import ImageGridAgri from "./Components/AgriBlog/ImageGridAgri";
import AgriBlogForm from "./Components/AgriBlog/AgriBlogForm";
import AgriBlog from "./Components/AgriBlog/AgriBlog";
import UpdateAgriBlog from "./Components/AgriBlog/UpdateAgriBlog";
import ImageGridAgriUser from "./Components/AgriBlog/ImageGridAgriUser";
import NavLandingGrass from "./Components/NavLandingStaff";



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Animal />}></Route>
        <Route path="/beef" element={<Beef />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/animal" element={<Animal />}></Route>
        <Route
          path="/landingStaff"
          element={
            <>
              {" "}
              <NavLandingStaff /> <LandingPageStaff />
            </>
          }
        ></Route>
        <Route
          path="/landingGrassroot"
          element={
            <>
              {" "}
              <NavLandingGrass /> <LandingPageGrassroot />{" "}
            </>
          }
        ></Route>
        <Route path="/selectionPage" element={<SelectionPage />}></Route>
        <Route
          path="/AnimalDataTable"
          element={
            <>
              {" "}
              <AnimalGrassNavbar /> <AnimalDataTable />{" "}
            </>
          }
        />
        <Route
          path="/agriTable"
          element={
            <>
              <AgriGrassNavbar /> <AgriDataTable />
            </>
          }
        />
        <Route
          path="/animalServices"
          element={
            <>
              <AnimalStaffNavbar />
              <AnimalServices />
            </>
          }
        />
        <Route path="/selectionStaff" element={<SelectionPageStaff />} />
        <Route path="/agriForm" element={<AgriBlogForm />} />
        <Route
          path="/agriServices"
          element={
            <>
              <AgriStaffNavbar />
              <ImageGridAgri /> <SelectionPageStaff />{" "}
            </>
          }
        ></Route>
        <Route path="/agriArticle" element={<AgriBlog />} />
        <Route path="/agriArticleEdit" element={<UpdateAgriBlog />} />
        <Route path="/agriUser" element={<ImageGridAgriUser />} />
      
        <Route path="/animallogin" element={<AnimalBlogLogin />}></Route>
        <Route path="/testimage" element={<TestImageForm />}></Route>
        <Route path="/allimages" element={<ImageGrid />}></Route>
        <Route path="/animalArticle" element={<AnimalBlog />}></Route>

        <Route path="/" element={<Animal/>}></Route>
        <Route path="/beef" element={<> <Beef/> <APNavbar/> <Footer/></>}></Route>
        <Route path="/test" element={<Test/>}></Route>
        <Route path="/animal" element={<Animal />}></Route>
        <Route path="/milk" element={<> <Milk/> <APNavbar/> <Footer/></>}></Route>
        <Route path="/egg" element={<> <Egg/> <APNavbar/> <Footer/></>}></Route>
        <Route path="/pork" element={<> <Pork/> <APNavbar/> <Footer/></>}></Route>
        <Route path="/chicken" element={<> <Chicken/> <APNavbar/> <Footer/></>}></Route>
        <Route path="/goatmilk" element={<> <GoatMilk/> <APNavbar/> <Footer/></>}></Route>
        <Route path="/goat" element={<> <Goat/> <APNavbar/> <Footer/></>}></Route>


        <Route path="/landingStaff" element={ <> <NavLandingStaff/> <LandingPageStaff />  </> }></Route>
        <Route path="/landingGrassroot" element={ <> <LandingPageGrassroot />  </>}></Route>
        <Route path="/selectionPage" element={<SelectionPage/>}></Route>
        <Route path="/AnimalDataTable" element={<>  <AnimalGrassNavbar/> <AnimalDataTable/> </>}/>
        <Route path="/agriTable" element={<><AgriGrassNavbar/> <AgriDataTable/></>}/>
       
      </Routes>
    </Router>
  );
}
