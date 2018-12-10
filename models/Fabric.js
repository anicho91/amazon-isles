const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var validator = require('validator');

var FabricSchema = new Schema({
    
    fabric_url: {
        type: String,
        trim: true,
        validate:[validator.isURL, "invalid URL"],
        required: "Please enter your fabric picture URL."
    },    
    fabric_pic: {
        type: String,
        trim: true,
        validate:[validator.isURL, "invalid URL"]        
    },
    fabric_name: {
        type: String,
        trim: true       
    },
    fabric_designer: {
        type: String,
        trim: true       
    }
  });
  
  const Fabric = mongoose.model("Fabric", FabricSchema);
  
  module.exports = Fabric;