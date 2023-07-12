const MongoClient = require("mongodb").MongoClient;
var url = `mongodb+srv://esquire:${process.env.DB_PASSWORD}@cluster0.ygqcnmi.mongodb.net`;

//ALL RESERVATIONS
exports.reservations = (req, res)=> {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("esquire")
        dbo.collection("reservation").find({}).toArray(function (err, result) {
            res.send(result)
        })
    })
}

//RESERVATIONS BASED ON FILTERS
exports.sortreservations = (req, res) => {
    var filters = {
        "ref": req.body.ref,
        "rname": req.body.roomFilterSelected,
        "guest": req.body.guest
    }

    var filteredresult = [];
    MongoClient.connect(url, function (err, db) {
        if (err) throw err
        var dbo = db.db("esquire")
        dbo.collection("reservation").find({}).toArray(function (err, result) {
            if (err) throw err;
            result.map((eachroom) => {
                if (eachroom.rname == filters.rname || eachroom.guestNumber == filters.guest || eachroom.ref == filters.ref) {
                    filteredresult.push(eachroom)
                }
            })
            if (filteredresult.length != 0) {
                res.send(filteredresult)
            }
            else {
                res.send("Not Found")
            }
        })
    })
}