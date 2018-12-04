const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var validator = require('validator');

var FabricSchema = new Schema({
    fabric_name: {
        type: String,
        trim: true,
        required: "Please enter fabric name."
    },
    fabric_pic: {
        type: String,
        trim: true,
        validate:[validator.isURL, "invalid URL"],
        required: "Please enter your fabric picture URL."
    }
  });
  
  const Fabric = mongoose.model("Fabric", FabricSchema);
  
  module.exports = Fabric;