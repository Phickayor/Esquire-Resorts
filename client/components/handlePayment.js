import Router from "next/router"
import { baseurl, publickey } from '../config/host'

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
        key: publickey,
        email,
        currency:'NGN',
        amount: price * 100,
        // label: "Optional string that replaces customer email"
        onClose: function () {
            alert('Window closed');
        //     Router.push({
        //         pathname: '/rooms'
        //     })
        },
        callback: function (response) {
                let message = 'Payment complete! Reference: ' + response.reference;
                fetch(`${baseurl}/verify/${response.reference}`).then(
                (res)=>{
                    return res.json()
                }
           ).then((data)=>{
            if(data.data.status==='success' && data.data.amount === price*100){
                CreateBooking(name, email, roomname, arrivalDate, depatureDate, guestNumber, price, response.reference)
                alert(message);
            }else if(data.data.amount != price*100){
                console.log(`Error verifying payment due too incorrect amount`)
            }
            else{
                console.log(`Failed to verify payment.`)
            }
           })
            
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
        alert("Payment recieved sucessful but there was an issue with sending your reservation details. Forward your payment receipt to esquireresorts@gmail.com to get your reservation details")
    }
}
export default handlePayment
