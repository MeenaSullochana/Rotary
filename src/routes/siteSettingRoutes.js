// routes/siteSettingRoutes.js

const router = require("express").Router();

const auth = require(
    "../middlewares/authCheck"
);

const checkStatus = require(
    "../middlewares/checkStatus"
);

const checkPermission = require(
    "../middlewares/checkPermission"
);

const upload = require(
    "../middlewares/upload"
);

const siteSettingController = require(
    "../controllers/siteSettingController"
);


// Create / Update
router.post(

    "/update",

    auth,

    checkStatus,

    checkPermission(
        "update_site_setting"
    ),

    upload.fields([
        {
            name: "logo",
            maxCount: 1
        },
        {
            name: "favicon",
            maxCount: 1
        }
    ]),

    siteSettingController.updateSiteSetting

);


// View
router.get(

    "/view",  auth,

    checkStatus,

    checkPermission(
        "view_site_setting"
    ),

    siteSettingController.getSiteSetting

);

// Website
router.get(

    "/web",

    siteSettingController.getSiteSettingWeb

);
module.exports = router;