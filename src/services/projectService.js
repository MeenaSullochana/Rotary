const Project = require("../models/Project");

exports.createProject = async (body, userId) => {

    return await Project.create({
        ...body,
        createdBy: userId
    });

};

exports.updateProject = async (id, body) => {

    return await Project.findByIdAndUpdate(
        id,
        body,
        {
            new: true
        }
    );

};

exports.getProjectsByUser = async (userId) => {

    return await Project.find({
        createdBy: userId
    }).sort({ createdAt: -1 });

};

exports.getProjectById = async (id) => {

    return await Project.findById(id);

};

exports.deleteProject = async (id) => {

    return await Project.findByIdAndUpdate(
        id,
        {
            status: "inactive"
        },
        {
            new: true
        }
    );

};

//website
exports.getProjectsByType = async (type) => {

    return await Project.find({
        type,
        status: "active"
    })
    .sort({ createdAt: -1 });

};