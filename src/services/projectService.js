const Project = require("../models/Project");

exports.createProject = async (body) => {

    return await Project.create(body);

};