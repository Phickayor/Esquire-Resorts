import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineHistory,
  AiOutlineContacts,
  AiOutlineQuestion,
  AiOutlineLink
} from "react-icons/ai";
function NavBar() {
  const [sideBarWidth, setSideBarWidth] = useState("0%");

  //icons
  const home = <AiOutlineHome className="self-center text-violet-700" />;
  const about = <AiOutlineHistory className="self-center text-violet-700" />;
  const contact = <AiOutlineContacts className="self-center text-violet-700" />;
  const help = <AiOutlineQuestion className="self-center text-violet-700" />;
  const link = (
    <AiOutlineLink className="self-center text-violet-700 text-lg hover:scale-110" />
  );

  function toggleSideBar() {
    if (sideBarWidth === "0%") {
      setSideBarWidth("100%");
    } else {
      setSideBarWidth("0%");
    }
  }

  return (
    <div className="fixed top-0 left-0 w-screen backdrop-blur-lg border-b-2 z-20 flex justify-between px-24 py-5">
      {/* Logo */}
      <div className="self-center flex gap-2">
        <img
          src="/favicon.ico"
          className="self-center h-19 w-10 object-cover"
        />
        <h1 className="self-center font-medium text-xl">Esquire Resorts</h1>
      </div>
      {/* Navigation */}
      <ul className="self-center flex space-x-8 [&>*]:p-2">
        <li>
          <Link
            href="/"
            className="hover:scale-105 duration-150 flex items-center gap-2"
          >
            {home}Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:scale-105 duration-150 flex items-center gap-2"
          >
            {about}About us
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:scale-105 duration-150 flex items-center gap-2"
          >
            {contact}Contact
          </Link>
        </li>
        <li>
          <Link
            href="/help"
            className="hover:scale-105 duration-150 flex items-center gap-1"
          >
            {help}Help
          </Link>
        </li>
      </ul>
      {/* Booking */}
      <div className="self-center flex gap-2 ">
        <span>Book a Room</span>
        <Link href="/rooms">{link}</Link>
      </div>
    </div>
  );
}

export default NavBar;
