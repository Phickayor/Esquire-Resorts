const get_reservations = require("../utilities/reservations.utility");

const all_reservations = async (req, res, next) => {
  try {
    const reservations = await get_reservations();
    reservations.success
      ? res.status(200).json({ ...reservations })
      : res.status(501).json({ success: false, ...reservations });
  } catch (error) {
    res.status(501).json({ success: false, error: error.message });
  }
};

const filter_reservations = async (req, res, next) => {
  try {
    let { rname, guestNumber, ref } = req.body;
    const filtered_result = [];
    const reservations = await get_reservations();
    if (reservations.success) {
      reservations.results.map((reservation) => {
        if (
          reservation.rname == rname ||
          reservation.guestNumber == guestNumber ||
          reservation.ref == ref
        ) {
          filtered_result.push(reservation);
        }
      });
      res.status(200).json({ ...filtered_result });
    } else {
      res.status(501).json({ ...reservations });
    }
  } catch (error) {
    res.status(501).json({ success: false, error });
  }
};
module.exports = {
  all_reservations,
  filter_reservations,
};
