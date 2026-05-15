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

        const data = await projectService.createProject(body);

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