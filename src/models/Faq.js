// models/Faq.js

const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema({

    question: {
        type: String,
        required: true
    },

    answer: {
        type: String,
        required: true
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
    "Faq",
    faqSchema
);