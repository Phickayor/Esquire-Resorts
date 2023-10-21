const connectToDatabase = require("../config/db.config");
const transporter = require("../config/transporter.config");
const check_reservation = async (req, res) => {
  try {
    var info = {
      rname: req.body.roomname,
      arrivalDate: req.body.arrivalDate,
      departureDate: req.body.departureDate,
    };
    const arrival = new Date(info.arrivalDate);
    const departure = new Date(info.departureDate);
    const db = await connectToDatabase();
    const reservations = await db.collection("reservation");
    const results = await reservations.find({}).toArray();
    const isRoomBooked = results.some((result) => {
      const start = new Date(result.arrivalDate);
      const end = new Date(result.depatureDate);
      return (
        ((arrival >= start && arrival <= end) ||
          (departure >= start && departure <= end)) &&
        info.roomname === result.roomname
      );
    });

    if (isRoomBooked) {
      res
        .status(401)
        .json({ message: "This room is currently booked and unavailable" });
    } else {
      res.status(200).json({ message: "available" });
    }
  } catch (error) {
    res.status(501).json({ error });
  }
};

const create_reservation = async (req, res, next) => {
  try {
    var reservation_details = {
      rname: req.body.roomname,
      name: req.body.name,
      arrivalDate: req.body.arrivalDate,
      departureDate: req.body.departureDate,
      guestNumber: req.body.guestNumber,
      price: req.body.price,
      mail: req.body.mail,
      ref: req.body.ref,
    };
    const db = await connectToDatabase();
    const reservations = await db.collection("reservation");
    reservations.insertOne(reservation_details, function (err, result) {
      if (err) throw err;
      next();
    });
  } catch (error) {
    res.status(501).json({ error });
  }
};

const send_reservation_mail = async (req, res) => {
  try {
    var reservationDetails = {
      rname: req.body.roomname,
      name: req.body.name,
      arrivalDate: req.body.arrivalDate,
      departureDate: req.body.departureDate,
      guestNumber: req.body.guestNumber,
      price: req.body.price,
      mail: req.body.mail,
      ref: req.body.ref,
    };

    //mail options
    var mailOptions = {
      from: '"Esquire Resorts" <esquireresorts@gmail.com>',
      to: reservationDetails.mail,
      subject: reservationDetails.name + "'s Reservation Details",
      html: `
              <section style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
                  <h2 style="color: #333;">Reservation Details</h2>
                  
                  <p style="margin-bottom: 15px;">
                      Dear ${reservationDetails.name},
                  </p>
                  
                  <ul style="list-style: none; padding: 0;">
                      <li><strong>Room Name:</strong> ${reservationDetails.rname}</li>
                      <li><strong>Arrival Date:</strong> ${reservationDetails.arrivalDate}</li>
                      <li><strong>Departure Date:</strong> ${reservationDetails.departureDate}</li>
                      <li><strong>Guest Number:</strong> ${reservationDetails.guestNumber}</li>
                      <li><strong>Price:</strong> ₦${reservationDetails.price}</li>
                      <li><strong>Reference:</strong> ${reservationDetails.ref}</li>
                  </ul>
                  
                  <p>
                      Thank you for choosing our services. We are delighted to confirm your reservation for the ${reservationDetails.rname} from ${reservationDetails.arrivalDate} to ${reservationDetails.departureDate}. If you have any further questions or need assistance, please don't hesitate to contact us.
                  </p>
                  
                  <p style="margin-top: 15px;">
                      Best regards,<br>
                      Esquire Resorts
                  </p>
              </section>`,
    };
    //send mail
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(501).json({
          success: false,
          message:
            "Mail was unable to send but reservation has been made successfully",
        });
      } else {
        console.log("Message sent: " + info.response);
        res.status(200).json({
          success: true,
          message: "Reservation made successfully check mail for details",
        });
      }
    });
  } catch (error) {
    res.status(501).json({ error });
  }
};
module.exports = {
  check_reservation,
  create_reservation,
  send_reservation_mail,
};
