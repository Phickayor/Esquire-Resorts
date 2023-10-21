import Router from "next/router";
import { baseurl, publickey } from "../config/host";

const handleBooking = async (
  name,
  mail,
  price,
  roomname,
  arrivalDate,
  departureDate,
  guestNumber
) => {
  //Making payment
  const handler = PaystackPop.setup({
    key: publickey,
    email: mail,
    currency: "NGN",
    amount: price * 100,
    onClose: function () {
      alert("Window closed");
      Router.push({
        pathname: "/rooms",
      });
    },
    callback: function (response) {
      verifyPayment(price, response.reference)
        .then((result) => {
          if (result) {
            createReservation(
              roomname,
              name,
              arrivalDate,
              departureDate,
              guestNumber,
              price,
              mail,
              response.reference
            );
          } else {
            console.log("Payment could not be verified");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  handler.openIframe();
};

const verifyPayment = (price, ref) => {
  try {
    return new Promise(async (resolve, reject) => {
      const res = await fetch(`${baseurl}/payment/verify/${ref}`);
      const result = await res.json();
      console.log(result);
      if (
        result.data.status === "success" &&
        result.data.amount === price * 100
      ) {
        resolve(true);
      } else {
        reject(new Error("Payment could not be verified"));
      }
    });
  } catch (error) {
    console.error("Error :" + error.message);
    return false;
  }
};

const createReservation = async (
  roomname,
  name,
  arrivalDate,
  departureDate,
  guestNumber,
  price,
  mail,
  ref
) => {
  try {
    const res = await fetch(`${baseurl}/reservation/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        roomname,
        name,
        arrivalDate,
        departureDate,
        guestNumber,
        price,
        mail,
        ref,
      }),
    });
    const data = await res.json();
    data.success ? console.log(data.message) : console.log(data.message);
  } catch (error) {
    console.error("Error :", error.message);
  }
};

module.exports = handleBooking;
