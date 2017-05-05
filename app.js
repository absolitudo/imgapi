var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    searchSchema = new mongoose.Schema({
        "term": String,
        "when": String
    }),
    SearchQueries = mongoose.model('SearchQueries', searchSchema),
    apiKey = process.env.API_KEY;

mongoose.connect(process.env.MONGODB_URI);
new SearchQueries({
    "term": "test",
    "when": new Date()
}).save(function(err) {
    console.log("data saved");
});
app.get("/api/latest/imagesearch", function(req, res) {
    SearchQueries.find({}, function(err, data) {
        data.forEach(function(dataPiece) {
            res.send(dataPiece);
        });
    });
});
app.listen(process.env.PORT || 8080);
console.log("server up");
