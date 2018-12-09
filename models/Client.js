const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");
var validator = require('validator');

var ClientSchema = new Schema({
    measurement: {

        bust: {
            type: Number,
            trim: true
        },
        waist: {
            type: Number,
            trim: true
        },
        hips: {
            type: Number,
            trim: true
        },
        knee_length: {
            type: Number,
            trim: true
        },        
        leg_length: {
            type: Number,
            trim: true
        },
        bp_length: {
            type: Number,
            trim: true
        },
        back_length: {
            type: Number,
            trim: true
        },
        arm_length: {
            type: Number,
            trim: true
        }
    }
  });
  
  const Client = User.discriminator("Client", ClientSchema, {
      discriminatorKey: "type"
  });
  
  module.exports = Client;