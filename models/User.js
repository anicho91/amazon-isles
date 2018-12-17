const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var validator = require('validator');

var UserSchema = new Schema({
    userId: {
        type: String,
        default: "Please update your user name",
        trim: true,
        required: "Please check your userId"
    },
    token: {
        type: String,
        trim: true,
        required: "Please check token"
    },
    phone: {
        type: String,
        default:"XXX-XXX-XXXX",
        trim: true,
    },
    street: {
        type: String,
        default:"Update your street address",
        trim: true,
    },
    city: {
        type: String,
        default:"Update your city",
        trim: true,
    },
    state: {
        type: String,
        default:"Update your state",
        trim: true,
    },
    country: {
        type: String,
        default: "Update your country",
        trim: true,
    },
    profile_picture: {
        type: String,
        default: "https://via.placeholder.com/350",
        trim: true,
        validate:[validator.isURL, "invalid URL"]
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "Order",
    }],
    category: {
        type: String,
        enum: ['client', 'provider'],
      }
  });
  
  const User = mongoose.model("User", UserSchema);
  
  module.exports = User;
