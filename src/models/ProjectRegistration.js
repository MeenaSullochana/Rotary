// models/ProjectRegistration.js

const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({

    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        required: true
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },

    registrationNumber: {
        type: String
    },

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        default: null
    },

    mobile: {
        type: String,
        required: true
    },

    district: {
        type: String,
        default: null
    },

    state: {
        type: String,
        default: null
    },

    userType: {
        type: String,
        enum: ["member", "user", "guest"],
        default: "guest"
    },

    paymentRequired: {
        type: Boolean,
        default: false
    },

    paymentStatus: {
        type: String,
        enum: ["pending", "paid"],
        default: "pending"
    },

    paymentId: {
        type: String,
        default: null
    },

    amount: {
        type: Number,
        default: 0
    },

    status: {
        type: String,
        enum: [
            "registered",
            "approved",
            "rejected"
        ],
        default: "registered"
    }

}, { timestamps: true });

module.exports = mongoose.model(
    "ProjectRegistration",
    registrationSchema
);