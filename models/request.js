const mongoose = require('./connection')

// ----------------------------
// Create Schema and Model-----
// ----------------------------
const {Schema, model } = mongoose;

const RequestSchema = new Schema({
    deviceType: { type: String, required: true },
    isPC: Boolean, // not req
    brand: String,
    dimension: String,
    quantityToRequest: { type: Number, required: true }
    // for profile
    // already filled out w hardcoded info
    // uncheck => blank, able to type into box
});


const Request = model("Request", RequestSchema);
module.exports = Request