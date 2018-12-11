const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var validator = require('validator');

var TestSchema = new Schema({
    token: {
        type: String,
        trim: true,
        required: "Please enter garment name."
    },
    category: {
        type: String,
        trim: true,
        required: "Please enter your garment picture URL."
    }
  });
  
  const Test = mongoose.model("Test", TestSchema);
  
  module.exports = Test;