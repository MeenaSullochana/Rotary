// controllers/memberController.js

const memberService = require(
    "../services/memberService"
);


// Update Profile
exports.updateProfile = async (
    req,
    res
) => {

    try {

        const body = {

            ...req.body,

            profileImage:
                req.file
                ? req.file.path
                : null

        };

        const data =
            await memberService.updateProfile(

                req.user._id,

                body,

                req.user._id

            );

        return res.status(200).json({

            status: true,

            message:
                "Profile updated successfully",

            data

        });

    }

    catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};


// Update Business
exports.updateBusiness = async (
    req,
    res
) => {

    try {

        const data =
            await memberService.updateBusiness(

                req.user._id,

                req.body,

                req.user._id

            );

        return res.status(200).json({

            status: true,

            message:
                "Business details updated successfully",

            data

        });

    }

    catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};


// Create Family
exports.createFamily = async (
    req,
    res
) => {

    try {

        const data =
            await memberService.createFamily(

                req.user._id,

                req.body,

                req.user._id

            );

        return res.status(201).json({

            status: true,

            message:
                "Family details added successfully",

            data

        });

    }

    catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};


// Create Special Day
exports.createSpecialDay = async (
    req,
    res
) => {

    try {

        const data =
            await memberService.createSpecialDay(

                req.user._id,

                req.body,

                req.user._id

            );

        return res.status(201).json({

            status: true,

            message:
                "Special day added successfully",

            data

        });

    }

    catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};

// Get Profile
exports.getProfile = async (
    req,
    res
) => {

    try {

        const data =
            await memberService.getProfile(
                req.params.id
            );

        return res.status(200).json({

            status: true,

            data

        });

    }

    catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};


// Get Business
exports.getBusiness = async (
    req,
    res
) => {

    try {

        const data =
            await memberService.getBusiness(
req.params.id            );

        return res.status(200).json({

            status: true,

            data

        });

    }

    catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};


// Get Family
exports.getFamily = async (
    req,
    res
) => {

    try {

        const data =
            await memberService.getFamily(
req.params.id            );

        return res.status(200).json({

            status: true,

            data

        });

    }

    catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};


// Get Special Days
exports.getSpecialDays = async (
    req,
    res
) => {

    try {

        const data =
            await memberService.getSpecialDays(
req.params.id            );

        return res.status(200).json({

            status: true,

            data

        });

    }

    catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};