// services/siteSettingService.js

const SiteSetting = require(
    "../models/SiteSetting"
);


// Create / Update
exports.updateSiteSetting = async (
    body,
    userId
) => {

    let setting =
        await SiteSetting.findOne();

    if (!setting) {

        setting =
            await SiteSetting.create({

                ...body,

                createdBy: userId

            });

    }

    else {

        setting =
            await SiteSetting.findByIdAndUpdate(

                setting._id,

                body,

                {
                    new: true
                }

            );

    }

    return setting;

};


// View
exports.getSiteSetting = async () => {

    return await SiteSetting.findOne();

};

// website
exports.getSiteSettingWeb = async () => {

    return await SiteSetting.findOne();

};