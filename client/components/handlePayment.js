import Router from "next/router"
import { baseurl } from '../config/host'

function handlePayment(email, price, roomname, arrivalDate, depatureDate, guestNumber, name) {
    console.log("got to payment fn")
    function CreateBooking(sname, semail, sroomname, sarrivalDate, sdepatureDate, sguestNumber, sprice, sref) {

        fetch(`${baseurl}/booking`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ sname, semail, sroomname, sarrivalDate, sdepatureDate, sguestNumber, sprice, sref })
        }).then(function (response) {
            return response.json()
        }).then(function (data) {
            if (data.info === "success") {
                SendMail("success", sname, semail, sroomname, sarrivalDate, sdepatureDate, sguestNumber, sprice, sref)
            } else {
                SendMail("failed")
            }
        })

    }
    const handler = PaystackPop.setup({
        key: 'pk_test_c3c92ed8d034efde8ef609b5b649b38d7737ff3a', // Replace with your public key
        email,
        amount: price * 100,
        // label: "Optional string that replaces customer email"
        onClose: function () {
            alert('Window closed. proceeding to rooms');
            Router.push({
                pathname: '/rooms'
            })
        },
        callback: function (response) {
            let message = 'Payment complete! Reference: ' + response.reference;
            CreateBooking(name, email, roomname, arrivalDate, depatureDate, guestNumber, price, response.reference)
            alert(message);

        }
    });

    handler.openIframe();
}
function SendMail(status, name, email, roomname, arrivalDate, depatureDate, guestNumber, price, ref) {
    if (status === "success") {
        fetch(`${baseurl}/sendreservation`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, roomname, arrivalDate, depatureDate, guestNumber, price, ref })
        })
        alert("Your reservation has been booked Successfully. Check your mail for your reservation details")
        Router.push({
            pathname: '/'
        })
    } else {
        alert("Payment recieved sucessful but there was an issue with your reservation. Forward your payment receipt to esquireresorts@gmail.com to get your reservation details")
    }
}
export default handlePayment
