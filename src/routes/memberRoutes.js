// routes/memberRoutes.js

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

const memberController = require(
    "../controllers/memberController"
);


// Profile
router.post(

    "/profile",

    auth,

    checkStatus,

    checkPermission(
        "update_member_profile"
    ),

    upload.single("profileImage"),

    memberController.updateProfile

);


// Business Details
router.post(

    "/business",

    auth,

    checkStatus,

    checkPermission(
        "update_member_business"
    ),

    memberController.updateBusiness

);


// Add Family Details
router.post(

    "/family",

    auth,

    checkStatus,

    checkPermission(
        "create_family_detail"
    ),

    memberController.createFamily

);


// Add Special Days
router.post(

    "/special-days",

    auth,

    checkStatus,

    checkPermission(
        "create_special_day"
    ),

    memberController.createSpecialDay

);

module.exports = router;