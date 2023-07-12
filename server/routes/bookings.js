const MongoClient = require("mongodb").MongoClient;
var url = `mongodb+srv://esquire:${process.env.DB_PASSWORD}@cluster0.ygqcnmi.mongodb.net`;

//CHECKING RESERVATIONS
exports.checkbooking =(req,res)=>{
    var info = {
        rname: req.body.roomname,
        arrivalDate: req.body.arrivalDate,
        depatureDate: req.body.depatureDate,
    }

    //Creating mongodb connection

    MongoClient.connect(url, function (err, db) {

        if (err) throw err
        var dbo = db.db("esquire");`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            `

        //Checking through reservation collection
        dbo.collection("reservation").find({}).toArray(function (err, result) {
            if (err) throw err;
            const arrival = new Date(info.arrivalDate)
            const departure = new Date(info.depatureDate)
            var status;
            for (var i = 0; i < result.length; i++) {
                const start = new Date(result[i].arrivalDate)
                const end = new Date(result[i].depatureDate)
                //Checking if reservation is booked already
                if (
                    (arrival >= start && arrival <= end) ||
                    (departure >= start && departure <= end) &&
                    (info.rname === result[i].rname)) {
                    status = "booked"
                    break;
                }
                //Checking if reservation is available
                else {
                    status = "available"
                }
            }
            console.log(status)
            res.json({ message: status })
            db.close()
        });
    })
}

//MAKING RESERVATION
exports.booking =(req,res)=>{
    var newinfo = {
        rname: req.body.sroomname,
        name: req.body.sname,
        arrivalDate: req.body.sarrivalDate,
        depatureDate: req.body.sdepatureDate,
        guestNumber: req.body.sguestNumber,
        price: req.body.sprice,
        mail: req.body.semail,
        ref: req.body.sref
    }

    MongoClient.connect(url, function (err, db) {
        if (err) throw err
        var dbo = db.db("esquire");

        dbo.collection("reservation").insertOne(newinfo, function (err, res) {
            if (err) throw err;
            db.close();
        })
        res.json({ info: "success" })
    })
}