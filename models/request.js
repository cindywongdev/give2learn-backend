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
    quantityToDonate: Number,
    isPickup: Boolean,
    donateDate: Date  
});


const Request = model("Request", RequestSchema);
module.exports = Request