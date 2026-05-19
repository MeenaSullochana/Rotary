// controllers/siteSettingController.js

const siteSettingService = require(
    "../services/siteSettingService"
);


// Create / Update
exports.updateSiteSetting = async (
    req,
    res
) => {

    try {

        const body = {
            ...req.body
        };

        if (req.files?.logo?.[0]) {

            body.logo =
                req.files.logo[0].path;

        }

        if (req.files?.favicon?.[0]) {

            body.favicon =
                req.files.favicon[0].path;

        }

        const data =
            await siteSettingService.updateSiteSetting(

                body,

                req.user?._id || null

            );

        return res.status(200).json({

            status: true,

            message:
                "Site settings updated successfully",

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
exports.getSiteSetting = async (
    req,
    res
) => {

    try {

        const data =
            await siteSettingService.getSiteSetting();

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

exports.getSiteSettingWeb = async (
    req,
    res
) => {

    try {

        const data =
            await siteSettingService.getSiteSettingWeb();

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