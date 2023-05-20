const mongoose = require('./connection')

// ----------------------------
// Create Schema and Model-----
// ----------------------------
const {Schema, model } = mongoose;

const DonationSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    fromState: String,
    fromCity: String,
    address1: String,
    address2: String,
    zipCode: Number,
    deviceType: String,
    isPC: Boolean,
    brand: String,
    modelType: String,
    quantityToDonate: Number,
    isPickup: Boolean,
    donateDate: Date
});


const Donation = model("Donation", DonationSchema);
module.exports = Donation