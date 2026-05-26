// models/User.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        unique: true,
        sparse: true,
        default: null
    },

    mobile: {
        type: String,
        unique: true,
        sparse: true,
        default: null
    },

    password: {
        type: String,
        required: true
    },

     roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        }
    ],

    type: {
        type: String,
        enum: [
            "super_admin",
            "admin",
            "employee",
            "member"
        ],
        default: "member"
    },

    memberId: {
        type: String,
        unique: true,
        sparse: true,
        default: null
    },

    employeeCode: {
        type: String,
        unique: true,
        sparse: true,
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
    },

    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        default: null
    },

    status: {
        type: Boolean,
        default: true
    }

}, { timestamps: true });

module.exports = mongoose.model(
    "User",
    userSchema
);



// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,


//   roles: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Role"
//     }
//   ],

//   type: {
//     type: String,
//     enum: ["super_admin", "admin", "employee"],
//     default: "employee"
//   },
// employeeCode: {
//   type: String,
//   unique: true,
//   sparse: true
// },
  
//   createdBy: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User"
//   },
  
//   companyId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Company"
//   },
//   status: {
//     type: Boolean,
//     default: true
//   }
// });

// module.exports = mongoose.model("User", userSchema);