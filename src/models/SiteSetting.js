// models/SiteSetting.js

const mongoose = require("mongoose");

const siteSettingSchema =
new mongoose.Schema({

    siteName: {
        type: String,
        default: null
    },

    favicon: {
        type: String,
        default: null
    },

    logo: {
        type: String,
        default: null
    },
 logo1: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
    },

    phone: {
        type: String,
        default: null
    },

    alternatePhone: {
        type: String,
        default: null
    },

    address: {
        type: String,
        default: null
    },

    copyrightText: {
        type: String,
        default: null
    },

    facebookLink: {
        type: String,
        default: null
    },

    instagramLink: {
        type: String,
        default: null
    },

    twitterLink: {
        type: String,
        default: null
    },

    youtubeLink: {
        type: String,
        default: null
    },

    aboutUs: {
        type: String,
        default: null
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    }

}, { timestamps: true });

module.exports = mongoose.model(
    "SiteSetting",
    siteSettingSchema
);