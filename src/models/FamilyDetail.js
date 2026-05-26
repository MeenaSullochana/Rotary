// models/FamilyDetail.js

const mongoose = require("mongoose");

const familyDetailSchema =
new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    name: String,

    relation: String,

    dob: Date,

    mobile: String,

    occupation: String,

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
    "FamilyDetail",
    familyDetailSchema
);