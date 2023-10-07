import React from "react";
import { AiOutlineSend } from "react-icons/ai";
function ContactUs() {
  const send = <AiOutlineSend className="inline self-center text-purple-500" />;

  return (
    <div>
      <h1 className="text-center heading">
        <span className="text-purple-500">Contact</span> Us
      </h1>
      <div className="flex py-5">
        <div className="lg:w-1/2 lg:p-10">
          <div className="space-y-2">
            <h1 className="text-slate-700 text-3xl lg:text-4xl font-semibold">
              Get in touch
            </h1>
            <p className="text-sm lg:text-md">
              Feel free to reach out to us for any inquiries or assistance. We
              value your input and are here to help.
            </p>
          </div>
          <form className="my-10 text-sm lg:text-md grid grid-cols-2 gap-6 [&>*]:duration-150 [&>*]:border-2 [&>*]:py-3 [&>*]:px-4 [&>*]:rounded-lg [&>*]:border-slate-700 ">
            <input
              type="text"
              placeholder="Name"
              className="focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="focus:outline-none focus:border-purple-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="focus:outline-none focus:border-purple-500"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="focus:outline-none focus:border-purple-500"
            />
            <textarea
              placeholder="Message"
              className="col-span-2 focus:outline-none focus:border-purple-500 h-32"
            ></textarea>
            <button className="mx-auto w-fit self-center col-span-2 hover:scale-105 duration-150">
              Send Message {send}
            </button>
          </form>
        </div>
        <div className="hidden self-center lg:block w-1/2 p-10">
          <img src="/icons/contact-illustration.jpg" />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
