import React, { useRef, useState } from "react";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */
import { Poppins } from "@next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";
import Head from "next/head";
import Image from "next/image";
import { baseurl } from "../../config/host";
const poppins = Poppins({ weight: "500", subsets: ["latin"] });
function Login() {
  const emailContainer = useRef();
  const pswdContainer = useRef();
  const [statusMessage, setStaus] = useState("");
  const [load, setLoad] = useState(null);
  const spin = <FontAwesomeIcon icon={faSpinner} className="fa-spin mx-2" />;
  const handleSignIn = (e) => {
    setLoad(spin);
    setStaus("");
    e.preventDefault();
    var email = emailContainer.current.value;
    var pswd = pswdContainer.current.value;
    fetch(`${baseurl}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, pswd })
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.status === "success") {
          localStorage.setItem("token", data.token);
          Router.push({
            pathname: "/admin/details"
          });
        } else {
          setStaus("The username and password doesn't match. Try again.");
        }
        setLoad("");
      })
      .catch((err) => {
        setLoad("");
        alert("Check your internet connection and try again.");
        console.log(err);
      });
  };

  return (
    <>
      <Head>
        <title>Esquire Resorts | Admin Sign In</title>
        <meta name="description" content="Esquire Resorts 404 page " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`bg-black relative h-screen text-white ${poppins.className}`}
      >
        <Image
          src="/background/bg1.jpeg"
          alt="Description of the image"
          fill
          className=" opacity-20"
        />
        <div className=" space-y-10 p-5 w-full md:w-[500px] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <h1 className="text-4xl inline-block  font-semibold border-b-4 py-1 lg:py-3 border-purple-500">
            Login
          </h1>
          <form
            onSubmit={handleSignIn}
            className="mx-auto w-11/12 space-y-10 flex flex-col "
          >
            <div className="border-b-2 py-2 flex gap-5 border-purple-500">
              <FontAwesomeIcon icon={faUser} />
              <input
                type="email"
                required
                name="email"
                autoComplete="true"
                ref={emailContainer}
                placeholder="Email Address"
                className="bg-inherit outline-none w-full"
              />
            </div>
            <div className="border-b-2 py-2 flex gap-5 border-purple-500">
              <FontAwesomeIcon icon={faLock} />
              <input
                type="password"
                required
                name="password"
                autoComplete="true"
                ref={pswdContainer}
                placeholder="Password"
                className="bg-inherit outline-none w-full"
              />
            </div>
            <button
              type="submit"
              className="border-2 mx-auto border-purple-500 w-10/12 self-center hover:border-none duration-500 ease-in-out scale hover:bg-purple-500 font-bold py-2"
            >
              {load} Sign In
            </button>
          </form>
          <p className="text-center font-serif text-red-500">{statusMessage}</p>
        </div>
      </div>
    </>
  );
}
export default Login;
