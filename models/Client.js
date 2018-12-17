const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");

var ClientSchema = new Schema({
    measurement: {

        bust: {
            type: Number,
            default: 0,
            trim: true
        },
        waist: {
            type: Number,
            default: 0,
            trim: true
        },
        hips: {
            type: Number,
            default: 0,
            trim: true
        },
        knee_length: {
            type: Number,
            default: 0,
            trim: true
        },        
        leg_length: {
            type: Number,
            default: 0,
            trim: true
        },
        bp_length: {
            type: Number,
            default: 0,
            trim: true
        },
        back_length: {
            type: Number,
            default: 0,
            trim: true
        },
        arm_length: {
            type: Number,
            default: 0,
            trim: true
        }
    }
  });
  
  const Client = User.discriminator("Client", ClientSchema, {
      discriminatorKey: "type"
  });
  
  module.exports = Client;