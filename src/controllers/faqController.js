// controllers/faqController.js

const faqService = require(
    "../services/faqService"
);


// Create FAQ
exports.createFaq = async (
    req,
    res
) => {

    try {

        const data =
            await faqService.createFaq(

                req.body,

                req.user?._id || null

            );

        return res.status(201).json({

            status: true,

            message:
                "FAQ created successfully",

            data

        });

    } catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};


// Update FAQ
exports.updateFaq = async (
    req,
    res
) => {

    try {

        const data =
            await faqService.updateFaq(

                req.params.id,

                req.body

            );

        return res.status(200).json({

            status: true,

            message:
                "FAQ updated successfully",

            data

        });

    } catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};


// FAQ List
exports.getFaqs = async (
    req,
    res
) => {

    try {

        const data =
            await faqService.getFaqs();

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


// Single FAQ View
exports.getFaqById = async (
    req,
    res
) => {

    try {

        const data =
            await faqService.getFaqById(
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


// Delete FAQ
exports.deleteFaq = async (
    req,
    res
) => {

    try {

        const data =
            await faqService.deleteFaq(
                req.params.id
            );

        return res.status(200).json({

            status: true,

            message:
                "FAQ deleted successfully",

            data

        });

    } catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};


// Website FAQ
exports.getFaqsWeb = async (
    req,
    res
) => {

    try {

        const data =
            await faqService.getFaqsWeb();

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