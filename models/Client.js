const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");
var validator = require('validator');

var ClientSchema = new Schema({
    measurement: {
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
    },
    orders: [
        {
        type: Schema.Types.ObjectId,
        ref: "Order"
        }
    ]   
  });
  
  const Client = User.discriminator("Client", ClientSchema, {
      discriminatorKey: "type"
  });
  
  module.exports = Client;