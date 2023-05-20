const mongoose = require('./connection')

// ----------------------------
// Create Schema and Model-----
// ----------------------------
const {Schema, model } = mongoose;

const DonationSchema = new Schema({
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


const Donation = model("Donation", DonationSchema);
module.exports = Donation