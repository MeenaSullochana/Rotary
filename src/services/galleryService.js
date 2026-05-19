// services/galleryService.js

const Gallery = require("../models/Gallery");


// Create
exports.createGallery = async (
    body,
    userId
) => {

    return await Gallery.create({
        ...body,
        createdBy: userId
    });

};


// List
exports.getGallery = async () => {

    return await Gallery.find({
        status: "active"
    })
    .sort({ createdAt: -1 });

};


// View
exports.getGalleryById = async (id) => {

    return await Gallery.findById(id);

};


// Delete Image
exports.deleteGalleryImage = async (
    galleryId,
    imageId
) => {

    return await Gallery.findByIdAndUpdate(

        galleryId,

        {
            $pull: {
                images: {
                    _id: imageId
                }
            }
        },

        {
            new: true
        }

    );

};


// Delete Gallery
exports.deleteGallery = async (id) => {

    return await Gallery.findByIdAndUpdate(

        id,

        {
            status: "inactive"
        },

        {
            new: true
        }

    );

};