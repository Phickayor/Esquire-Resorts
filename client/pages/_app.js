import "../styles/globals.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Poppins } from "@next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const poppins = Poppins({ weight: "500", subsets: ["devanagari"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={poppins.className}>
      <Component {...pageProps} />
      <ToastContainer />
    </div>
  );
}
