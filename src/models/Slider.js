// models/Slider.js

const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

   
    image: {
        type: String,
        required: true
    },

    buttonLink: {
        type: String,
        default: null
    },

    order: {
        type: Number,
        default: 0
    },

    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    }

}, { timestamps: true });

module.exports = mongoose.model(
    "Slider",
    sliderSchema
);