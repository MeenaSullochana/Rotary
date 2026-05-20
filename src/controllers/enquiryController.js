// controllers/enquiryController.js

const enquiryService = require(
    "../services/enquiryService"
);


// Create Enquiry
exports.createEnquiry = async (
    req,
    res
) => {

    try {

        const data =
            await enquiryService.createEnquiry(
                req.body
            );

        return res.status(201).json({

            status: true,

            message:
                "Enquiry submitted successfully",

            data

        });

    } catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};


// All Enquiries
exports.getEnquiries = async (
    req,
    res
) => {

    try {

        const data =
            await enquiryService.getEnquiries();

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


// Single Enquiry
exports.getEnquiryById = async (
    req,
    res
) => {

    try {

        const data =
            await enquiryService.getEnquiryById(
                req.params.id
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


// Project Wise Enquiries
exports.getProjectEnquiries = async (
    req,
    res
) => {

    try {

        const data =
            await enquiryService.getProjectEnquiries(
                req.params.projectId
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


// Delete Enquiry
exports.deleteEnquiry = async (
    req,
    res
) => {

    try {

        const data =
            await enquiryService.deleteEnquiry(
                req.params.id
            );

        return res.status(200).json({

            status: true,

            message:
                "Enquiry deleted successfully",

            data

        });

    } catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};
// Get Enquiries By Type
exports.getEnquiriesByType = async (
    req,
    res
) => {

    try {

        const data =
            await enquiryService.getEnquiriesByType(
                req.params.enquiryType
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
exports.updateEnquiryStatus = async (
    req,
    res
) => {

    try {

        const data =
            await enquiryService.updateEnquiryStatus(

                req.params.id,

                req.body,

                req.user?._id || null

            );

        return res.status(200).json({

            status: true,

            message:
                "Enquiry status updated successfully",

            data

        });

    } catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};