// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
import AgriGrassNavbar from "./Components/AgriGrassNavbar";

export default function App() {
  return (
    <Router>
      <Routes>
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


        <Route path="/" element={<Animal />}></Route>
        <Route
          path="/beef"
          element={
            <>
              {" "}
              <Beef /> <APNavbar /> <Footer />
            </>
          }
        ></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/animal" element={<Animal />}></Route>
        <Route
          path="/milk"
          element={
            <>
              {" "}
              <Milk /> <APNavbar /> <Footer />
            </>
          }
        ></Route>
        <Route
          path="/egg"
          element={
            <>
              {" "}
              <Egg /> <APNavbar /> <Footer />
            </>
          }
        ></Route>
        <Route
          path="/pork"
          element={
            <>
              {" "}
              <Pork /> <APNavbar /> <Footer />
            </>
          }
        ></Route>
        <Route
          path="/chicken"
          element={
            <>
              {" "}
              <Chicken /> <APNavbar /> <Footer />
            </>
          }
        ></Route>
        <Route
          path="/goatmilk"
          element={
            <>
              {" "}
              <GoatMilk /> <APNavbar /> <Footer />
            </>
          }
        ></Route>

        <Route
          path="/landingStaff"
          element={
            <>
              {" "}
              <NavLandingStaff /> <LandingPageStaff />{" "}
            </>
          }
        ></Route>
        <Route
          path="/landingGrassroot"
          element={
            <>
              {" "}
              <LandingPageGrassroot />{" "}
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
      </Routes>
    </Router>
  );
}
