// services/enquiryService.js

const Enquiry = require(
    "../models/Enquiry"
);


// Create Enquiry
exports.createEnquiry = async (
    body
) => {

    return await Enquiry.create(body);

};


// All Enquiries
exports.getEnquiries = async () => {

    return await Enquiry.find()
        .populate(
            "projectId"            
        )
        .sort({ createdAt: -1 });

};


// Single Enquiry
exports.getEnquiryById = async (
    id
) => {

    return await Enquiry.findById(id)
        .populate(
            "projectId"
        );

};


// Project Wise Enquiries
exports.getProjectEnquiries = async (
    projectId
) => {

    return await Enquiry.find({
        projectId
    }).populate(
            "projectId"            
        )
    .sort({ createdAt: -1 });

};


// Delete Enquiry
exports.deleteEnquiry = async (
    id
) => {

    return await Enquiry.findByIdAndDelete(
        id
    );

};

exports.getEnquiriesByType = async (
    enquiryType
) => {

    return await Enquiry.find({

        enquiryType

    })
    .populate(
        "projectId"
       
    )
    .sort({ createdAt: -1 });

};

exports.updateEnquiryStatus = async (

    id,

    body,

    userId

) => {

    return await Enquiry.findByIdAndUpdate(

        id,

        {

            ...body,

            updatedBy: userId

        },

        {
            new: true
        }

    );

};

