// models/MemberBusiness.js

const mongoose = require("mongoose");

const memberBusinessSchema =
new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    companyName: String,

    businessType: String,

    designation: String,

    officePhone: String,

    officeAddress: String,

    website: String,

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
    "MemberBusiness",
    memberBusinessSchema
);