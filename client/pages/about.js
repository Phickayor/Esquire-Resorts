import React from "react";
import NavBar from "../components/NavBar";
import AboutHero from "../components/AboutHero";
import AboutIntroduction from "../components/AboutIntroduction";
import History from "../components/History";
import Address from "../components/Address";
import Footer from "../components/Footer";
import Staffs from "../components/Staffs";

const About = () => {
  return (
    <>
      <NavBar />
      <AboutHero />
      <div className="[&>*]:py-10 px-5 md:px-10 lg:px-20 xl:px-36 ">
        <AboutIntroduction />
        <History />
        <Staffs />
        <Address />
      </div>
      <Footer />
    </>
  );
};
export default About;
