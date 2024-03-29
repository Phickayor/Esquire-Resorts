import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineHistory,
  AiOutlineContacts,
  AiOutlineQuestion,
  AiOutlineLink,
  AiOutlineMenu,
  AiOutlineClose
} from "react-icons/ai";
function NavBar() {
  const [sideBarWidth, setSideBarWidth] = useState("w-0");
  const menu = <AiOutlineMenu className="text-xl self-center cursor-pointer" />;
  const close = (
    <AiOutlineClose className=" text-xl self-center cursor-pointer" />
  );
  const [menubutton, setMenuButton] = useState(menu);
  //icons
  const home = <AiOutlineHome className="self-center text-violet-700" />;
  const about = <AiOutlineHistory className="self-center text-violet-700" />;
  const contact = <AiOutlineContacts className="self-center text-violet-700" />;
  const help = <AiOutlineQuestion className="self-center text-violet-700" />;
  const link = (
    <AiOutlineLink className="self-center text-violet-700 text-lg hover:scale-110" />
  );
  function toggleSideBar() {
    if (sideBarWidth === "w-0") {
      setSideBarWidth("w-72");
      setMenuButton(close);
    } else {
      setSideBarWidth("w-0");
      setMenuButton(menu);
    }
  }

  return (
    <div className="sticky top-0 bg-purple-50 backdrop-blur-lg border-b-2 z-20 flex justify-between px-5 md:px-10 lg:px-20 xl:px-36 py-2 lg:py-4">
      {/* Logo */}
      <div className="self-center flex gap-2">
        {/* <img
          src="/favicon.ico"
          className="self-center h-19 w-10 object-cover"
        /> */}
        <Link
          href="/"
          className="self-center font-semibold text-lg lg:text-xl text-violet-500"
        >
          Esquire Resorts
        </Link>
      </div>
      {/* Navigation */}
      <ul className="hidden self-center lg:flex space-x-8 [&>*]:p-2">
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
      <div className="self-center lg:text-md text-sm hidden lg:flex gap-2 ">
        <span className="font-medium">Book a Room</span>
        <Link href="/rooms">{link}</Link>
      </div>
      <div onClick={toggleSideBar} className="lg:hidden">
        {menubutton}
      </div>
      <div
        className={`block lg:hidden absolute right-0 top-10 ${sideBarWidth} h-screen overflow-y-hidden bg-purple-50 duration-300`}
      >
        <ul className="self-center space-y-8 [&>*]:p-2 py-10 px-3">
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
        <Link href="/rooms" className="flex flex-col">
          <button className="self-center w-9/12 border-none bg-purple-500  text-white py-3 rounded-lg text-center border-2 hover:scale-105 duration-150">
            Book a room
          </button>
        </Link>
      </div>
    </div>
  );
}
`   `;
export default NavBar;
