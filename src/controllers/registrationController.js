// controllers/registrationController.js

const registrationService = require(
    "../services/registrationService"
);
//admin

// Admin - Project registrations
exports.getProjectRegistrations = async (
    req,
    res
) => {

    try {

        const data =
            await registrationService.getProjectRegistrations(
                req.params.projectId,
                req.user._id
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
exports.viewProjectRegistrations = async (
    req,
    res
) => {

    try {

        const data =
            await registrationService.viewProjectRegistrations(
                req.params.id,
                req.user._id 
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

// Logged-in User - My registrations
exports.getMyRegistrations = async (
    req,
    res
) => {

    try {

        const data =
            await registrationService.getMyRegistrations(
                req.user._id
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
//website
exports.registerProject = async (
    req,
    res
) => {

    try {
        const data =
            await registrationService.registerProject(
                req.params.id,
                req.body,
                req.user ? req.user._id : null 
            );

        return res.status(201).json({
            status: true,
            message:
                "Registration successful",
            data
        });

    } catch (err) {

        return res.status(500).json({
            status: false,
            message: err.message
        });

    }

};