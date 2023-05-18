// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import PropTypes from 'prop-types';

import AnimalBlog from "./Components/AnimalBlog/AnimalBlog";
import AllBlogsStaff from "./Components/AnimalBlog/AllBlogsStaff";
import UpdateBlog from "./Components/AnimalBlog/UpdateBlog";

import CusViewBeef from "./Components/CustomerAP/CusViewBeef";

import Animal from "./Components/AnimalProduction/Animal";
import Beef from "./Components/AnimalProduction/Beef";
import ViewBeef from "./Components/AnimalProduction/ViewBeef";
import BeefDetails from "./Components/AnimalProduction/BeefDetails";
import UpdateBeef from "./Components/AnimalProduction/UpdateBeef";
import Chicken from "./Components/AnimalProduction/Chicken";
import ChickenDetails from "./Components/AnimalProduction/ChickenDetails";
import ViewChicken from "./Components/AnimalProduction/ViewChicken";
import UpdateChicken from "./Components/AnimalProduction/UpdateChicken";
import Test from "./Components/AnimalProduction/Test";
import Milk from "./Components/AnimalProduction/Milk";
import Egg from "./Components/AnimalProduction/Egg";
import Pork from "./Components/AnimalProduction/Pork";
import GoatMilk from "./Components/AnimalProduction/GoatMilk";
import Goat from "./Components/AnimalProduction/Goat";
import Agri from "./Components/Agriculture/Agri";
import APNavbar from "./Components/AnimalProduction/APNavbar";
import Footer from "./Components/Footer";

import LandingPageGrassroot from "./Components/LandingPageGrassroot";
import LandingPageStaff from "./Components/LandinPageStaff";
import NavLandingStaff from "./Components/NavLandingStaff";

import AgriSections from "./Components/AgriSections";
import AnimalSections from "./Components/AnimalSections";

import SelectionPage from "./Components/SelectionPage";
import AnimalDataTable from "./Components/AnimalDataTable";
import AgriDataTable from "./Components/AgriDataTable";
import AnimalGrassNavbar from "./Components/AnimalGrassNavbar";
import AgriGrassNavbar from "./Components/AgriBlog/AgriGrassNavbar";
import AnimalServices from "./Components/AnimalServices";
import SelectionPageStaff from "./Components/SelectionPageStaff";
import AnimalStaffNavbar from "./Components/AnimalBlog/AnimalStaffNavbar";
import AgriStaffNavbar from "./Components/AgriBlog/AgriStaffNavbar";
import ImageGridAgri from "./Components/AgriBlog/ImageGridAgri";
import AgriBlogForm from "./Components/AgriBlog/AgriBlogForm";
import AgriBlog from "./Components/AgriBlog/AgriBlog";
import UpdateAgriBlog from "./Components/AgriBlog/UpdateAgriBlog";
import ImageGridAgriUser from "./Components/AgriBlog/ImageGridAgriUser";
import NavLandingGrass from "./Components/NavLandingGrass";
import AgriUserNav from "./Components/AgriBlog/AgriUserNav";
import AnimalUserNav from "./Components/AnimalBlog/AnimalUserNav";
import AllAnimalBlogs from "./Components/AnimalBlog/AllAnimalBlogs";
import AnimalBlogForm from "./Components/AnimalBlog/AnimalBlogForm";

import Login from "./Components/Login";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import HomeNavbar from "./Components/HomeNavBar";
import HomeWhiteNavbar from "./Components/HomeWhiteNavBar";

// function PrivateRoute({ path, element }) {
//   const hasLoggedIn = sessionStorage.getItem('hasLoggedIn') === 'true';

//   return hasLoggedIn ? (
//     <Route path={path} element={element} />
//   ) : (
//     <Navigate to="/" replace />
//   );

 
// }

// PrivateRoute.propTypes = {
//   path: PropTypes.string.isRequired,
//   element: PropTypes.element.isRequired
// }

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Animal />}></Route>
        <Route
          path="/agri"
          element={
            <>
              <Agri /> <APNavbar /> <Footer />
            </>
          }
        ></Route>

        <Route
          path="/animchoose"
          element={
            <>
              <AgriSections /> <Footer />
            </>
          }
        ></Route>
        <Route
          path="/agrichoose"
          element={
            <>
              <AnimalSections />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/animal" element={<Animal />}></Route>
        <Route
          path="/home"
          element={
            <>
              {" "}
              <HomeWhiteNavbar />
              <Home />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/aboutus"
          element={
            <>
              {" "}
              <HomeNavbar />
              <AboutUs />
              <Footer />
            </>
          }
        ></Route>
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
          ImageGridAgri
          element={
            <>
              <AnimalStaffNavbar />
              <AnimalServices />
            </>
          }
        />
        <Route path="/selectionStaff" element={<SelectionPageStaff />} />
        <Route
          path="/agriForm"
          element={
            <>
              <AgriBlogForm />
              <Footer />
            </>
          }
        />
        <Route
          path="/agriServices"
          element={
            <>
              <AgriStaffNavbar />
              <ImageGridAgri /> <SelectionPageStaff />
              <Footer />{" "}
            </>
          }
        ></Route>
        <Route
          path="/agriArticle"
          element={
            <>
              <AgriBlog />
              <Footer />
            </>
          }
        />
        <Route
          path="/agriArticleEdit"
          element={
            <>
              <UpdateAgriBlog /> <Footer />{" "}
            </>
          }
        />
        <Route
          path="/agriUser"
          element={
            <>
              <AgriUserNav /> <ImageGridAgriUser />
              <SelectionPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/addanimalblog"
          element={
            <>
              <AnimalUserNav />
              <AnimalBlogForm />
              <SelectionPage />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/allanimblogs"
          element={
            <>
              <AnimalUserNav />
              <AllAnimalBlogs />
              <SelectionPage />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/animalArticle" element={<AnimalBlog />}></Route>
        <Route
          path="/allBlogStaff"
          element={
            <>
              <AnimalStaffNavbar />
              <AllBlogsStaff />
              <SelectionPageStaff />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/blogUpdate"
          element={
            <>
              <UpdateBlog />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/" element={<Animal />}></Route>

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
          path="/landingStaff"
          element={
            <>
              <NavLandingStaff /> <LandingPageStaff />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/landingGrassroot"
          element={
            <>
              {" "}
              <LandingPageGrassroot /> <Footer />{" "}
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
        <Route
          path="/vbeef"
          element={
            <>
              <ViewBeef /> <APNavbar /> <Footer />{" "}
            </>
          }
        ></Route>
        <Route
          path="/upbeef"
          element={
            <>
              <UpdateBeef /> <APNavbar /> <Footer />{" "}
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
          path="/goat"
          element={
            <>
              {" "}
              <Goat /> <APNavbar /> <Footer />
            </>
          }
        ></Route>

        <Route
          path="/landingStaff"
          element={
            <>
              {" "}
              <NavLandingStaff /> <LandingPageStaff /> <Footer />{" "}
            </>
          }
        ></Route>
        <Route
          path="/landingGrassroot"
          element={
            <>
              {" "}
              <LandingPageGrassroot /> <Footer />{" "}
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
        <Route path="/" element={<Login />}></Route>
        <Route path="/agri" element={<><Agri/> <APNavbar /> <Footer /></>}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/animal" element={<Animal />}></Route>
        <Route path="/landingStaff" element={<><NavLandingStaff /><LandingPageStaff /></>} />
        <Route path="/landingGrassroot" element={<><NavLandingGrass /><LandingPageGrassroot /></>} />
        <Route path="/selectionPage" element={<SelectionPage />} />
        <Route path="/AnimalDataTable" element={<><AnimalGrassNavbar /><AnimalDataTable /></>} />
        <Route path="/agriTable" element={<><AgriGrassNavbar /><AgriDataTable /></>} />
        <Route path="/animalServices" element={<><AnimalStaffNavbar /><AnimalServices /></>} />
        <Route path="/home" element={<><Home /><Footer /></>} />
        <Route path="/aboutus" element={<><AboutUs /><Footer /></>} />
        <Route path="/landingStaff" element={<><NavLandingStaff /><LandingPageStaff /></>} />
        <Route path="/landingGrassroot" element={<><NavLandingGrass /><LandingPageGrassroot /></>} />
        <Route path="/selectionPage" element={<SelectionPage />} />
        <Route path="/AnimalDataTable" element={<><AnimalGrassNavbar /><AnimalDataTable /></>} />
        <Route path="/agriTable" element={<><AgriGrassNavbar /><AgriDataTable /></>} />
        <Route path="/animalServices" element={<><AnimalStaffNavbar /><AnimalServices /></>} />
        <Route path="/selectionStaff" element={<SelectionPageStaff />} />
        <Route path="/agriForm" element={<><AgriBlogForm /><Footer /></>} />
        <Route path="/agriServices" element={<><AgriStaffNavbar /><ImageGridAgri /><SelectionPageStaff /><Footer /></>} />
        <Route path="/agriArticle" element={<><AgriBlog /><Footer /></>} />
        <Route path="/agriArticleEdit" element={<><UpdateAgriBlog /><Footer /></>} />
        <Route path="/agriUser" element={<><AgriUserNav /><ImageGridAgriUser /><SelectionPage /><Footer /></>} />
        <Route path="/addanimalblog" element={<><AnimalUserNav /><AnimalBlogForm /><SelectionPage /><Footer /></>} />
        <Route path="/allanimblogs" element={<><AnimalUserNav /><AllAnimalBlogs /><SelectionPage /><Footer /></>} />
        <Route path="/animalArticle" element={<AnimalBlog />} />
        <Route path="/allBlogStaff" element={<><AnimalStaffNavbar /><AllBlogsStaff /><SelectionPageStaff /><Footer /></>} />
        <Route path="/blogUpdate" element={<><UpdateBlog /><Footer /></>} />

        <Route path="/cusviewbeef" element={<CusViewBeef />} />
        <Route path="/test" element={<Test />} />
        <Route path="/animal" element={<Animal />} />
        <Route path="/milk" element={<><Milk /><APNavbar /><Footer /></>} />
        <Route path="/beef" element={<><Beef /><APNavbar /><Footer /></>} />
        <Route path="/singlebeef" element={<BeefDetails />} />
        <Route path="/vbeef" element={<><ViewBeef /><APNavbar /><Footer /></>} />
        <Route path="/upbeef" element={<><UpdateBeef /><APNavbar /><Footer /></>} />
        <Route path="/egg" element={<><Egg /><APNavbar /><Footer /></>} />
        <Route path="/pork" element={<><Pork /><APNavbar /><Footer /></>} />
        <Route path="/chicken" element={<><Chicken /><APNavbar /><Footer /></>} />
        <Route path="/singlechicken" element={<ChickenDetails />} />
        <Route path="/vchicken" element={<><ViewChicken /><APNavbar /><Footer /></>} />
        <Route path="/upchicken" element={<><UpdateChicken /><APNavbar /><Footer /></>} />
        <Route path="/goatmilk" element={<><GoatMilk /><APNavbar /><Footer /></>} />
        <Route path="/goat" element={<><Goat /><APNavbar /><Footer /></>} />
      </Routes>
    </Router>
  );
}
