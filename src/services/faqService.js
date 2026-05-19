// services/faqService.js

const Faq = require("../models/Faq");


// Create FAQ
exports.createFaq = async (
    body,
    userId
) => {

    return await Faq.create({

        ...body,

        createdBy: userId

    });

};


// Update FAQ
exports.updateFaq = async (
    id,
    body
) => {

    return await Faq.findByIdAndUpdate(

        id,

        body,

        {
            new: true
        }

    );

};


// FAQ List
exports.getFaqs = async () => {

    return await Faq.find()
        .sort({ order: 1 });

};


// Single FAQ View
exports.getFaqById = async (
    id
) => {

    return await Faq.findById(id);

};


// Delete FAQ
exports.deleteFaq = async (
    id
) => {

    return await Faq.findByIdAndDelete(
        id
    );

};


// Website FAQ
exports.getFaqsWeb = async () => {

    return await Faq.find({

        status: "active"

    })
    .sort({ order: 1 });

};