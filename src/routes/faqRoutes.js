// routes/faqRoutes.js

const router = require("express").Router();

const checkPermission = require(
    "../middlewares/checkPermission"
);

const auth = require(
    "../middlewares/authCheck"
);

const checkStatus = require(
    "../middlewares/checkStatus"
);

const faqController = require(
    "../controllers/faqController"
);


// Create FAQ
router.post(

    "/create",

    auth,

    checkStatus,

    checkPermission("create_faq"),

    faqController.createFaq

);


// Update FAQ
router.put(

    "/update/:id",

    auth,

    checkStatus,

    checkPermission("update_faq"),

    faqController.updateFaq

);


// FAQ List
router.get(

    "/",

    auth,

    checkStatus,

    checkPermission("get_faq"),

    faqController.getFaqs

);


// Single FAQ View
router.get(

    "/view/:id",

    auth,

    checkStatus,

    checkPermission("view_faq"),

    faqController.getFaqById

);


// Delete FAQ
router.delete(

    "/delete/:id",

    auth,

    checkStatus,

    checkPermission("delete_faq"),

    faqController.deleteFaq

);


// Website FAQ
router.get(

    "/web",

    faqController.getFaqsWeb

);

module.exports = router;