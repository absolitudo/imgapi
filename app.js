var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    searchSchema = new Schema({
        "term": String,
        "when": String
    }),
    SearchQueries = mongoose.model('SearchQueries', searchSchema),
    apiKey = process.env.API_KEY,
    dbURI = process.env.MONGODB_URI;
