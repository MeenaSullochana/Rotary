// models/Blog.js

const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    shortDescription: {
        type: String,
        default: null
    },

    longDescription: {
        type: String,
        default: null
    },

    image: {
        type: String,
        default: null
    },

    location: {
        type: String,
        default: null
    },

    eventDate: {
        type: Date,
        default: null
    },

    status: {
        type: String,
        enum: [
            "active",
            "inactive"
        ],
        default: "active"
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    }

}, { timestamps: true });

module.exports = mongoose.model(
    "Blog",
    blogSchema
);