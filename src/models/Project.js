const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: String,
  longDescription: String,

    contactPerson: {
        type: String,
        default: null
    },

    contactNumber: {
        type: String,
        default: null
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

    type: {
        type: String,
        enum: [
            "project",
            "competition",
            "event",
            "campaign"
        ],
        default: "project"
    },

    accessType: {
        type: String,
        enum: ["public", "member", "both"],
        default: "both"
    },

    startDate: Date,

    endDate: Date,

    venue: String,

    registrationRequired: {
        type: Boolean,
        default: false
    },

    registrationFee: {
        type: Number,
        default: 0
    },

    submissionRequired: {
        type: Boolean,
        default: false
    },

    maxParticipants: Number,

    status: {
        type: String,
        enum: ["draft", "active", "completed","inactive"],
        default: "active"
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);