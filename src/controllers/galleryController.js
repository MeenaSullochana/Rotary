// controllers/galleryController.js

const galleryService = require(
    "../services/galleryService"
);


// Create
exports.createGallery = async (
    req,
    res
) => {

    try {

        let images = [];

        if (
            req.files &&
            req.files.length > 0
        ) {

            images = req.files.map(
                (file) => ({

                    image: file.path,

                    caption: ""

                })
            );

        }

        const body = {
            ...req.body,
            images
        };

        const data =
            await galleryService.createGallery(
                body,
                req.user?._id || null
            );

        return res.status(201).json({
            status: true,
            message:
                "Gallery created successfully",
            data
        });

    } catch (err) {

        return res.status(500).json({
            status: false,
            message: err.message
        });

    }

};


// List
exports.getGallery = async (
    req,
    res
) => {

    try {

        const data =
            await galleryService.getGallery();

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


// View
exports.getGalleryById = async (
    req,
    res
) => {

    try {

        const data =
            await galleryService.getGalleryById(
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


// Delete Single Image
exports.deleteGalleryImage = async (
    req,
    res
) => {

    try {

        const data =
            await galleryService.deleteGalleryImage(
                req.params.galleryId,
                req.params.imageId
            );

        return res.status(200).json({
            status: true,
            message:
                "Image deleted successfully",
            data
        });

    } catch (err) {

        return res.status(500).json({
            status: false,
            message: err.message
        });

    }

};


// Delete Gallery
exports.deleteGallery = async (
    req,
    res
) => {

    try {

        const data =
            await galleryService.deleteGallery(
                req.params.id
            );

        return res.status(200).json({
            status: true,
            message:
                "Gallery deleted successfully",
            data
        });

    } catch (err) {

        return res.status(500).json({
            status: false,
            message: err.message
        });

    }

};