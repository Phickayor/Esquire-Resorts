import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import faqs from "../utils/faqs.json";
import Aos from "aos";
import "aos/dist/aos.css";
function Faqs() {
  const MoreOrLess = <FontAwesomeIcon icon={faAngleDown} />;
  function showorHide(e) {
    var par = e.target.nextElementSibling;
    if (par === null) {
      e.preventDefault();
    } else {
      par.classList.toggle("h-0");
    }
  }
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="space-y-2 text-center">
        <h1 className="subheading">
          Frequently Asked <span className="text-purple-500">Questions</span>?
        </h1>
        <p>Find answers to commonly asked questions</p>
      </div>
      <div>
        {faqs ? (
          <ul data-aos="fade-up" data-aos-duration="1500" className="my-10">
            {faqs.map((faq, index) => (
              <li key={index} className="border-b-2 hover:border-purple-500">
                <div
                  onClick={showorHide}
                  className="flex justify-between py-3 text-black cursor-pointer"
                >
                  <h1 className="font-medium text-lg">{faq.question}</h1>
                  <button className="cursor-pointer" disabled>
                    {MoreOrLess}
                  </button>
                </div>
                <p className="my-2 overflow-y-auto ease-in h-0 duration-300">
                  {faq.answer}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}

export default Faqs;
