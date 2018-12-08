const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");
var validator = require('validator');

var ClientSchema = new Schema({
    measurement: {
        weist: {
            type: Number,
            trim: true
        },
        bust: {
            type: Number,
            trim: true
        },
        arm_length: {
            type: Number,
            trim: true
        },
        leg_length: {
            type: Number,
            trim: true
        }
    }
  });
  
  const Client = User.discriminator("Client", ClientSchema, {
      discriminatorKey: "type"
  });
  
  module.exports = Client;