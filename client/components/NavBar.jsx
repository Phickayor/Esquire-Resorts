import { faBars, faBed, faClose, faHome, faHandshake, faContactCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
function NavBar(props) {
    const [sideBarWidth, setSideBarWidth] = useState("0%");
    const close = (
        <FontAwesomeIcon
            icon={faClose}
            className="py-3 px-4 text-4xl font-semibold text-textcolor"
        />
    );
    const harmburger = (
        <FontAwesomeIcon icon={faBars} className="p-4 text-4xl " />
    );
    const home = <FontAwesomeIcon icon={faHome} className="self-center" />
    const room = <FontAwesomeIcon icon={faBed} className="self-center" />
    const help = <FontAwesomeIcon icon={faHandshake} className="self-center" />
    const contact = <FontAwesomeIcon icon={faContactCard} className="self-center" />

    var navigations = [
        {
            "name": props.firstnav,
            "href": props.firstlink
        }, {
            "name": props.secondnav,
            "href": props.secondlink
        }, {
            "name": props.thirdnav,
            "href": props.thirdlink
        }, {
            "name": props.fourthnav,
            "href": props.fourthlink
        }
    ]
    function toggleSideBar() {
        if (sideBarWidth === "0%") {
            setSideBarWidth("100%");
        } else {
            setSideBarWidth("0%");
        }
    }

    return (
        <div className="sticky bg-[#ebeef0] text-gray-700 z-10 top-0 lg:p-3 p-2 flex justify-between border-b-2 ">
            <div className="flex lg:px-10 ">
                {/* <img src="/favicon.ico" className="lg:h-24 lg:w-full w-1/6 self-center" /> */}
                <h1 className="self-center p-1 text-3xl font-semibold">Esquire Resorts</h1>
            </div>
            <ul className="lg:flex hidden space-x-10 font-semibold text-xl px-10 self-center">
                {navigations.map((nav, index) => (
                    <Link href={nav.href} key={index}>
                        <li className="hover:list-disc">{nav.name}</li>
                    </Link>
                ))}
            </ul>
            <div
                className="lg:hidden self-center cursor-pointer"
                onClick={() => toggleSideBar()}
            >
                {harmburger}
            </div>
            <div
                className=" duration-[1.5s] z-30 left-0 top-0 l h-screen fixed overflow-y-auto bg-[#ebeef0] text-gray-700 flex-col flex"
                style={{ width: sideBarWidth }}
            >
                <div className="flex p-8 justify-between border-b-2">
                    <h1 className="self-center text-3xl font-semibold">Esquire Resorts</h1>

                    <button
                        className="bg-white hover:bg-purple-500 duration-300 rounded-full w-16 h-16"
                        onClick={() => toggleSideBar()}
                    >
                        {close}
                    </button>
                </div>

                <div className="flex flex-col mx-auto w-10/12 py-16 text-2xl space-y-20">
                    {navigations.map((nav) => {
                        var icon =
                            (nav.name === "Home") ? home :
                                (nav.name === "Our Rooms") ? room :
                                    (nav.name === "Help") ? help :
                                        (nav.name === "Contact") ? contact :
                                            undefined;
                        return (<div key={nav.name} className="flex gap-4">
                            {icon}
                            <Link href={nav.href} className="self-center duration-300 hover:scale-110 hover:text-purple-500" onClick={() => toggleSideBar()}>
                                {nav.name}
                            </Link>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    );
}

export default NavBar;
