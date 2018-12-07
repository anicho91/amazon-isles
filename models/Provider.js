const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");
var validator = require('validator');

var ProviderSchema = new Schema({
    budget: {
        type: Number,
        trim: true,
    },
    availability: {
        type: Boolean,
        trim: true,
    },
    demo: {
        type: String,
        trim: true,
    },
    job_category: {
        type: String,
        trim: true,
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