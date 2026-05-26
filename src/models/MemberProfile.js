// models/MemberProfile.js

const mongoose = require("mongoose");

const memberProfileSchema =
new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    profileImage: {
        type: String,
        default: null
    },

    gender: {
        type: String,
        default: null
    },

    dob: {
        type: Date,
        default: null
    },

    bloodGroup: {
        type: String,
        default: null
    },

    address: {
        type: String,
        default: null
    },

    city: {
        type: String,
        default: null
    },

    district: {
        type: String,
        default: null
    },

    state: {
        type: String,
        default: null
    },

    pincode: {
        type: String,
        default: null
    },

    bio: {
        type: String,
        default: null
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },

    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    }

}, { timestamps: true });

module.exports = mongoose.model(
    "MemberProfile",
    memberProfileSchema
);