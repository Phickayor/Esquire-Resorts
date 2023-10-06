import React from "react";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Gallery from "../components/Gallery";
import NavBar from "../components/NavBar";
import Reviews from "../components/Reviews";
import Services from "../components/Services";
import { Poppins } from "@next/font/google";
import Head from "next/head";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */
const poppins = Poppins({ weight: "500", subsets: ["devanagari"] });

function About() {
  return (
    <div className={`flex flex-col min-h-screen ${poppins.className}`}>
      <Head>
        <title>Esquire Resorts</title>
        <meta name="description" content="Esquire hotel rooms " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Home />

      <div className="[&>*]:py-12 px-10 lg:px-40 ">
        <AboutUs />
        <Gallery />
        <Reviews />
        <Services />
      </div>
      <Footer />
    </div>
  );
}

export default About;
