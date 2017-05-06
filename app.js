require('dotenv').config();
var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    querySchema = new mongoose.Schema({
        "term": String,
        "when": String
    }),
    SearchQueries = mongoose.model('SearchQueries', querySchema);

mongoose.connect(process.env.MONGODB_URI);
app.get("/api/latest/imagesearch", function(req, res) {
    SearchQueries.find({}, {
        "_id": 0,
        "__v": 0
    }, function(err, data) {
        res.send(data.reverse());
    });
});

app.get("/api/imagesearch/:term", function(req, res) {
    SearchQueries.findOne({}, function(err, data) {
        if(err) throw err;
        data.remove();
    });
    SearchQueries({
        "term": req.params.term,
        "when": new Date().toISOString()
    }).save(function(err) {
        if(err) throw err;
    });

    // make the actual search and display the results
});
app.listen(process.env.PORT || 8080);
console.log("server up");
