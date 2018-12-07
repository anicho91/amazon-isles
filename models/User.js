const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var validator = require('validator');

var UserSchema = new Schema({
    userId: {
        type: String,
        trim: true,
        validate:[validator.isEmail, "invalid email"],
        required: "Please type your user ID(email address)."
    },
    password: {
        type: String,
        trim: true,
        required: "Please type your password."
    },
    phone: {
        type: String,
        trim: true,
    },
    street: {
        type: String,
        trim: true,
    },
    city: {
        type: String,
        trim: true,
    },
    state: {
        type: String,
        trim: true,
    },
    country: {
        type: String,
        trim: true,
    },
    profile_picture: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
        enum: ['client', 'provider'],
      }
  });
  
  const User = mongoose.model("User", UserSchema);
  
  module.exports = User;