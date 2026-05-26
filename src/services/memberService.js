// services/memberService.js

const MemberProfile =
require("../models/MemberProfile");

const MemberBusiness =
require("../models/MemberBusiness");

const FamilyDetail =
require("../models/FamilyDetail");

const SpecialDay =
require("../models/SpecialDay");


// Update Profile
exports.updateProfile = async (
    userId,
    body,
    updatedBy
) => {

    let data =
        await MemberProfile.findOne({
            userId
        });

    if (!data) {

        data =
            await MemberProfile.create({

                ...body,

                userId,

                createdBy: updatedBy

            });

    }

    else {

        data =
            await MemberProfile.findOneAndUpdate(

                { userId },

                {

                    ...body,

                    updatedBy

                },

                {
                    new: true
                }

            );

    }

    return data;

};


// Update Business
exports.updateBusiness = async (
    userId,
    body,
    updatedBy
) => {

    let data =
        await MemberBusiness.findOne({
            userId
        });

    if (!data) {

        data =
            await MemberBusiness.create({

                ...body,

                userId,

                createdBy: updatedBy

            });

    }

    else {

        data =
            await MemberBusiness.findOneAndUpdate(

                { userId },

                {

                    ...body,

                    updatedBy

                },

                {
                    new: true
                }

            );

    }

    return data;

};


// Create Family
exports.createFamily = async (
    userId,
    body,
    createdBy
) => {

    return await FamilyDetail.create({

        ...body,

        userId,

        createdBy

    });

};


// Create Special Day
exports.createSpecialDay = async (
    userId,
    body,
    createdBy
) => {

    return await SpecialDay.create({

        ...body,

        userId,

        createdBy

    });

};

// Get Profile
exports.getProfile = async (
    userId
) => {

    return await MemberProfile.findOne({
        userId
    });

};


// Get Business
exports.getBusiness = async (
    userId
) => {

    return await MemberBusiness.findOne({
        userId
    });

};


// Get Family
exports.getFamily = async (
    userId
) => {

    return await FamilyDetail.find({
        userId
    });

};


// Get Special Days
exports.getSpecialDays = async (
    userId
) => {

    return await SpecialDay.find({
        userId
    });

};

