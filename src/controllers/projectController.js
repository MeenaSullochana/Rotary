const projectService = require("../services/projectService");

exports.createProject = async (req, res) => {

    try {

        let images = [];

        if (req.files && req.files.length > 0) {

            images = req.files.map((file) => ({
                image: file.path,
                caption: ""
            }));

        }

        const body = {
            ...req.body,
            images
        };

        const data = await projectService.createProject(body,  req.user._id);

        return res.status(201).json({
            status: true,
            message: "Project created successfully",
            data
        });

    } catch (err) {

        return res.status(500).json({
            status: false,
            message: err.message
        });

    }

};

exports.updateProject = async (req, res) => {

    try {

        let images = [];

        if (req.files && req.files.length > 0) {

            images = req.files.map((file) => ({
                image: file.path,
                caption: ""
            }));

        }

        const body = {
            ...req.body
        };

        if (images.length > 0) {
            body.images = images;
        }

        const data = await projectService.updateProject(
            req.params.id,
            body
        );

        return res.status(200).json({
            status: true,
            message: "Project updated successfully",
            data
        });

    } catch (err) {

        return res.status(500).json({
            status: false,
            message: err.message
        });

    }

};

exports.getMyProjects = async (req, res) => {

    try {

        const userId = req.user._id;

        const data = await projectService.getProjectsByUser(
            userId
        );

        return res.status(200).json({
            status: true,
            data
        });

    } catch (err) {

        return res.status(500).json({
            status: false,
            message: err.message
        });

    }

};
exports.getProjectById = async (req, res) => {

    try {

        const data = await projectService.getProjectById(
            req.params.id
        );

        if (!data) {

            return res.status(404).json({
                status: false,
                message: "Project not found"
            });

        }

        return res.status(200).json({
            status: true,
            data
        });

    } catch (err) {

        return res.status(500).json({
            status: false,
            message: err.message
        });

    }

};
exports.deleteProject = async (req, res) => {

    try {

        const data = await projectService.deleteProject(
            req.params.id
        );

        if (!data) {

            return res.status(404).json({
                status: false,
                message: "Project not found"
            });

        }

        return res.status(200).json({
            status: true,
            message: "Project deleted successfully",
            data
        });

    } catch (err) {

        return res.status(500).json({
            status: false,
            message: err.message
        });

    }

};
//website

exports.getProjectsByType = async (req, res) => {

    try {

        const data = await projectService.getProjectsByType(
            req.params.type
        );

        return res.status(200).json({
            status: true,
            data
        });

    } catch (err) {

        return res.status(500).json({
            status: false,
            message: err.message
        });

    }

};