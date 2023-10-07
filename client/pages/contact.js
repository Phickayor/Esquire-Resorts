import React, { useState } from "react";
import ContactUs from "../components/Contact";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Head from "next/head";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */
import { Poppins } from "@next/font/google";
const poppins = Poppins({ weight: "500", subsets: ["latin"] });

function Contact() {
  return (
    <>
      <Head>
        <title>Esquire Resorts | Contact</title>
        <meta name="description" content="Esquire hotel rooms " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <div className="[&>*]:py-6 px-5 md:px-10 lg:px-20 xl:px-36 ">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
