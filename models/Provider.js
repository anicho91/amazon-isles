const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");
var validator = require('validator');

var ProviderSchema = new Schema({
    budget: {
        type: Number,
        default: 0,
        trim: true,
    },
    availability: {
        type: Boolean,
        default: false,
        trim: true,
    },
    demo: [{
        type: String,
        trim: true,
        validate:[validator.isURL, "invalid URL"]
    }],
    job_category: {
        type: String,
        default: "Please update the information.",
        trim: true,
    }
  });
  
  const Provider = User.discriminator("Provider", ProviderSchema, {
    discriminatorKey: "type"
});
  
  module.exports = Provider;