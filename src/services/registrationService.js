// services/registrationService.js

const Project = require("../models/Project");
const User = require("../models/User");
const Registration = require("../models/ProjectRegistration");
//admin
// Admin - Get registrations for my project
exports.getProjectRegistrations = async (
    projectId,
    userId
) => {

    // Check project owner
    const project = await Project.findOne({
        _id: projectId,
        createdBy: userId
    });

    if (!project) {
        throw new Error(
            "Project not found or unauthorized"
        );
    }

    return await Registration.find({
        projectId
    }).populate("userId").populate("projectId")
    .sort({ createdAt: -1 });

};

exports.viewProjectRegistrations = async (
    id,
    userId
) => {


    return await Registration.findById(
        id
    ).populate("userId").populate("projectId");
   

};
// Logged-in User - My registrations
exports.getMyRegistrations = async (
    userId1
) => {

    return await Registration.find({
        userId:userId1
    })
    .populate("userId").populate("projectId")
    .sort({ createdAt: -1 });

};
//website
exports.registerProject = async (
    projectId,
    body,
    user
) => {

    const project = await Project.findById(projectId);

    if (!project) {
        throw new Error("Project not found");
    }

    if (!project.registrationRequired) {
        throw new Error("Registration not allowed");
    }

    let registrationData = {

        projectId,

        registrationNumber:
            "REG-" + Date.now(),

        paymentRequired:
            project.paymentRequired,

        paymentStatus:
            project.paymentRequired
                ? "pending"
                : "paid",

        amount:
            project.registrationFee

    };

    // Logged-in User
    if (user) {

        const userData = await User.findById(
            user
        );
        // console.log(user);

        if (!userData) {
            throw new Error("User not found");
        }

        const alreadyRegistered =
            await Registration.findOne({
                projectId,
                userId: user
            });

        if (alreadyRegistered) {
            throw new Error(
                "Already registered"
            );
        }

        registrationData.userId =
            userData._id;

        registrationData.name =
            body.name;

        registrationData.email =
            body.email;

        registrationData.mobile =
            body.mobile;

        registrationData.district =
           body.district;

        registrationData.state =
           body.state;

        registrationData.userType =
           body.type === "member"
                ? "member"
                : "user";

    }

    // Guest User
    else {

        registrationData.name =
            body.name;

        registrationData.email =
            body.email;

        registrationData.mobile =
            body.mobile;

        registrationData.district =
            body.district;

        registrationData.state =
            body.state;

        registrationData.userType =
            "guest";

    }

    return await Registration.create(
        registrationData
    );

};