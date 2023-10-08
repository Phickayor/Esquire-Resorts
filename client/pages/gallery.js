import React from "react";
import NavBar from "../components/NavBar";
import Gallery from "../components/Gallery";
import AllPhotos from "../components/AllPhotos";
function gallery() {
  return (
    <>
      <NavBar />{" "}
      <div className="[&>*]:py-6 px-5 md:px-10 lg:px-20 xl:px-36 ">
        <AllPhotos />
      </div>
    </>
  );
}

export default gallery;
