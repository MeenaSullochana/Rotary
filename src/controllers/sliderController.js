// controllers/sliderController.js

const sliderService = require(
    "../services/sliderService"
);


exports.createSlider = async (
    req,
    res
) => {

    try {

        const body = {
            ...req.body,
            image: req.file
                ? req.file.path
                : null
        };

        const data =
            await sliderService.createSlider(
                body,
                req.user?._id || null
            );

        return res.status(201).json({
            status: true,
            message:
                "Slider created successfully",
            data
        });

    } catch (err) {

        return res.status(500).json({
            status: false,
            message: err.message
        });

    }

};


exports.updateSlider = async (
    req,
    res
) => {

    try {

        const body = {
            ...req.body
        };

        if (req.file) {

            body.image = req.file.path;

        }

        const data =
            await sliderService.updateSlider(
                req.params.id,
                body
            );

        return res.status(200).json({
            status: true,
            message:
                "Slider updated successfully",
            data
        });

    } catch (err) {

        return res.status(500).json({
            status: false,
            message: err.message
        });

    }

};


exports.getSliders = async (
    req,
    res
) => {

    try {

        const data =
            await sliderService.getSliders();

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


exports.getSliderById = async (
    req,
    res
) => {

    try {

        const data =
            await sliderService.getSliderById(
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


exports.deleteSlider = async (
    req,
    res
) => {

    try {

        const data =
            await sliderService.deleteSlider(
                req.params.id
            );

        return res.status(200).json({
            status: true,
            message:
                "Slider deleted successfully",
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
exports.getSlidersWeb = async (
    req,
    res
) => {

    try {

        const data =
            await sliderService.getSlidersWeb();

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