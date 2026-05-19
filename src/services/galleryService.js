// services/galleryService.js

const Gallery = require("../models/Gallery");


// Create Gallery
exports.createGallery = async (
    body,
    userId
) => {

    return await Gallery.create({

        ...body,

        createdBy: userId

    });

};


// Update Gallery
exports.updateGallery = async (
    id,
    body
) => {

    return await Gallery.findByIdAndUpdate(

        id,

        body,

        {
            new: true
        }

    );

};


// Gallery List
exports.getGallery = async () => {

    return await Gallery.find()
        .sort({ order: 1 });

};


// Single Gallery View
exports.getGalleryById = async (
    id
) => {

    return await Gallery.findById(id);

};


// Delete Gallery
exports.deleteGallery = async (
    id
) => {

    return await Gallery.findByIdAndDelete(
        id
    );

};


// Website Gallery
exports.getGalleryWeb = async () => {

    return await Gallery.find({

        status: "active"

    })
    .sort({ order: 1 });

};