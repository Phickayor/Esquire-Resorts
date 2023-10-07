import React from "react";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Gallery from "../components/Gallery";
import NavBar from "../components/NavBar";
import Reviews from "../components/Reviews";
import Services from "../components/Services";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>Esquire Resorts</title>
        <meta name="description" content="Esquire hotel rooms " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Home />
      <div className="[&>*]:py-12 px-5 md:px-10 lg:px-20 xl:px-36">
        <AboutUs />
        <Gallery />
        <Reviews />
        <Services />
      </div>
      <Footer />
    </>
  );
}

export default About;
