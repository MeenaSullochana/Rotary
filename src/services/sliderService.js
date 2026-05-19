// services/sliderService.js

const Slider = require("../models/Slider");


exports.createSlider = async (
    body,
    userId
) => {

    return await Slider.create({
        ...body,
        createdBy: userId
    });

};


exports.updateSlider = async (
    id,
    body
) => {

    return await Slider.findByIdAndUpdate(
        id,
        body,
        { new: true }
    );

};


exports.getSliders = async () => {

    return await Slider.find().sort({ order: 1 });

};


exports.getSliderById = async (id) => {

    return await Slider.findById(id);

};


exports.deleteSlider = async (id) => {

    return await Slider.findByIdAndDelete(
        id,
     
    );

};

//website

exports.getSlidersWeb = async () => {

    return await Slider.find({
        status: "active"
    }).sort({ order: 1 });

};