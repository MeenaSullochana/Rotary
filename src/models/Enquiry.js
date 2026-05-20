// models/Enquiry.js

const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({

    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        default: null
    },

    enquiryType: {
        type: String,
        enum: [
            "contact",
            "project",
            "event",
            "competition",
            "campaign"
        ],
        default: "contact"
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

  

    message: {
        type: String,
        default: null
    },

    status: {
        type: String,
        enum: [
            "new",
            "contacted",
            "closed"
        ],
        default: "new"
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
    "Enquiry",
    enquirySchema
);