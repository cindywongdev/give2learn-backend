const mongoose = require('./connection')

// ----------------------------
// Create Schema and Model-----
// ----------------------------
const {Schema, model } = mongoose;

const RequestSchema = new Schema({
    deviceType: String,
    isPC: Boolean,
    brand: String,
    dimension: String,
    quantityToRequest: Number,
    requestDate: Date  // not sure if wanted
});


const Request = model("Request", RequestSchema);
module.exports = Request