const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");
var validator = require('validator');

var ProviderSchema = new Schema({
    budget: {
        type: Number,
        trim: true,
        required: "Please enter your budget."
    },
    availability: {
        type: Boolean,
        trim: true,
        required: "Please enter your availability."
    },
    demo: {
        type: String,
        trim: true,
        validate:[validator.isURL, "invalid URL"],
        required: "Please enter your demo URL."
    },
    picture: {
        type: String,
        trim: true,
        validate:[validator.isURL, "invalid URL"],
        required: "Please enter your picture URL."
    },
    job_category: {
        type: String,
        trim: true,
        required: "Please choose category"
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "Order",
    }]
  });
  
  const Provider = User.discriminator("Provider", ProviderSchema, {
    discriminatorKey: "type"
});
  
  module.exports = Provider;