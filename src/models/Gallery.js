// models/Gallery.js

const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },


    images: [
        {
            image: {
                type: String
            },

            caption: {
                type: String,
                default: ""
            },

            uploadedAt: {
                type: Date,
                default: Date.now
            }
        }
    ],

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
    "Gallery",
    gallerySchema
);