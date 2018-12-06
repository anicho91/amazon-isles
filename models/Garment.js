const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var validator = require('validator');

var GarmentSchema = new Schema({
    garment_name: {
        type: String,
        trim: true,
        required: "Please enter garment name."
    },
    garment_pic: {
        type: String,
        trim: true,
        validate:[validator.isURL, "invalid URL"],
        required: "Please enter your garment picture URL."
    },
    garment_length: {
        type: Number,
        trim: true,
        required: "Please enter garment length."
    }
  });
  
  const Garment = mongoose.model("Garment", GarmentSchema);
  
  module.exports = Garment;