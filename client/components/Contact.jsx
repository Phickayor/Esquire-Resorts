import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { baseurl } from "../config/host";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
// import { Toast } from "react-toastify/dist/components";
function ContactUs() {
  let send = <AiOutlineSend className="inline self-center text-purple-500" />;
  let spinner = <FaSpinner className="fa-spin inline" />;
  const [name, setName] = useState(null);
  const [subject, setSubject] = useState(null);
  const [email, setMail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [message, setMessage] = useState(null);
  const [delivery, setDelivery] = useState(send);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDelivery(spinner);
    try {
      let res = await fetch(`${baseurl}/contact/send-mail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, subject, email, phone, message }),
      });
      let data = await res.json();
      data.success ? toast.success(data.message) : toast.error(data.message);
      setDelivery(send);
    } catch (error) {
      toast.error(error);
      setDelivery(send);
    }
  };
  return (
    <div>
      <h1 className="text-center heading">
        <span className="text-purple-500">Contact</span> Us
      </h1>
      <div className="flex py-5">
        <div className="lg:w-1/2 lg:p-10">
          <div className="space-y-2">
            <h1 className="subheading">Get in touch</h1>
            <p>
              Feel free to reach out to us for any inquiries or assistance. We
              value your input and are here to help.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="my-10 text-sm lg:text-md grid grid-cols-2 gap-6 [&>*]:duration-150 [&>*]:border-2 [&>*]:py-3 [&>*]:px-4 [&>*]:rounded-lg [&>*]:border-slate-700 "
          >
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
              className="focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              required
              className="focus:outline-none focus:border-purple-500"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setMail(e.target.value)}
              placeholder="Email"
              required
              className="focus:outline-none focus:border-purple-500"
            />
            <input
              type="tel"
              name="phone number"
              pattern="[0-9]{11}"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              required
              className="focus:outline-none focus:border-purple-500"
            />
            <textarea
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              required
              className="col-span-2 focus:outline-none focus:border-purple-500 h-32"
            ></textarea>
            <button
              type="submit"
              className="mx-auto w-fit self-center col-span-2 hover:scale-105 duration-150"
            >
              Send Message {delivery}
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
