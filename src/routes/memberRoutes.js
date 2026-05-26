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


// Get Profile
router.get(

    "/profile/:id",

    auth,

    checkStatus,

    checkPermission(
        "view_member_profile"
    ),

    memberController.getProfile

);


// Get Business
router.get(

    "/business/:id",

    auth,

    checkStatus,

    checkPermission(
        "view_member_business"
    ),

    memberController.getBusiness

);


// Get Family
router.get(

    "/family/:id",

    auth,

    checkStatus,

    checkPermission(
        "view_family_detail"
    ),

    memberController.getFamily

);


// Get Special Days
router.get(

    "/special-days/:id",

    auth,

    checkStatus,

    checkPermission(
        "view_special_day"
    ),

    memberController.getSpecialDays

);

module.exports = router;