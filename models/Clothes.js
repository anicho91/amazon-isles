const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ClothesSchema = new Schema({
    budget: {
        type: Number,
        trim: true,
        required: "Please enter your budget."
    },
    garmentId: {
        type: Schema.Types.ObjectId,
        ref: "Garment"
    },
    fabricId: {
        type: Schema.Types.ObjectId,
        ref: "Fabric"
    }
  });
  
  const Clothes = mongoose.model("Clothes", ClothesSchema);
  
  module.exports = Clothes;