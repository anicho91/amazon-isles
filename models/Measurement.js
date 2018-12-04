const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var MeasurementSchema = new Schema({
    weist: {
        type: Number,
        trim: true,
        required: "Please enter your weist."
    },
    bust: {
        type: Number,
        trim: true,
        required: "Please enter your bust."
    },
    arm_length: {
        type: Number,
        trim: true,
        required: "Please enter your arm length."
    },
    leg_length: {
        type: Number,
        trim: true,
        required: "Please enter your leg length."
    }
  });
  
  const Measurement = mongoose.model("Measurement", MeasurementSchema);
  
  module.exports = Measurement;