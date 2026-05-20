// routes/enquiryRoutes.js

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
const optionalAuth = require(
    "../middlewares/optionalAuth"
);

const enquiryController = require(
    "../controllers/enquiryController"
);



//admin
// Admin - All Enquiries
router.get(

    "/",

    auth,

    checkStatus,

    checkPermission("get_enquiry"),

    enquiryController.getEnquiries

);


// Admin - Single Enquiry
router.get(

    "/view/:id",

    auth,

    checkStatus,

    checkPermission("view_enquiry"),

    enquiryController.getEnquiryById

);


// Admin - Project Wise Enquiries
router.get(

    "/project/:projectId",

    auth,

    checkStatus,

    checkPermission("get_enquiry"),

    enquiryController.getProjectEnquiries

);


// Delete Enquiry
router.delete(

    "/delete/:id",

    auth,

    checkStatus,

    checkPermission("delete_enquiry"),

    enquiryController.deleteEnquiry

);
router.get(

    "/type/:enquiryType",

    auth,

    checkStatus,

    checkPermission("get_enquiry"),

    enquiryController.getEnquiriesByType

);

router.put(

    "/update-status/:id",

    auth,

    checkStatus,

    checkPermission(
        "update_enquiry"
    ),

    enquiryController.updateEnquiryStatus

);


//website

// Website Contact Enquiry
router.post(

    "/create",

    optionalAuth,

    enquiryController.createEnquiry

);
module.exports = router;