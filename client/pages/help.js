import React, { useState } from "react";
import Footer from "../components/Footer";
import HelpSearch from "../components/HelpSearch";
import NavBar from "../components/NavBar";
import Faqs from "../components/Faqs";
import Head from "next/head";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

function Help() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Esquire Resorts | Help</title>
        <meta name="description" content="Esquire hotel rooms " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="[&>*]:py-12 px-5 md:px-10 lg:px-20 xl:px-36 ">
        <Faqs />
      </div>
      <Footer />
    </div>
  );
}

export default Help;
