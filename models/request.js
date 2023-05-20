const mongoose = require('./connection')

// ----------------------------
// Create Schema and Model-----
// ----------------------------
const {Schema, model } = mongoose;

const RequestSchema = new Schema({
    fullName: String,
    email: String,
    phoneNumber: String,
    fromState: String,
    fromCity: String,
    address: String,
    deviceType: String,
    isPC: Boolean,
    modelType: String,
    quantityToRequest: Number,
    requestDate: Date  
});


const Request = model("Request", RequestSchema);
module.exports = Request