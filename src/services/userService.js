// services/userService.js

const bcrypt = require("bcryptjs");

const User = require("../models/User");


// Create User
exports.createUser = async (
    body,
    userId
) => {

    const hashedPassword =
        await bcrypt.hash(
            body.password,
            10
        );

    return await User.create({

        ...body,

        password: hashedPassword,

        createdBy: userId

    });

};


// Update User
exports.updateUser = async (
    id,
    body,
    userId
) => {

    if (body.password) {

        body.password =
            await bcrypt.hash(
                body.password,
                10
            );

    }

    return await User.findByIdAndUpdate(

        id,

        {

            ...body,

            updatedBy: userId

        },

        {
            new: true
        }

    );

};


// User List
exports.getUsers = async (loginUserId) => {

    return await User.find({

        type: "member",

        createdBy: loginUserId

    })
        .populate(
            "roles"
        )
        .sort({ createdAt: -1 });

};


// Single User
exports.getUserById = async (
    id
) => {

    return await User.findById(id)
        .populate(
            "roles",
            "name"
        );

};


// Delete User
exports.deleteUser = async (
    id
) => {

    return await User.findByIdAndDelete(
        id
    );

};