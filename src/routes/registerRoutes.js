// routes/projectRoutes.js

const router = require("express").Router();
const checkPermission = require("../middlewares/checkPermission");
const auth  = require("../middlewares/authCheck");
const checkStatus = require("../middlewares/checkStatus");
const registrationController = require(
    "../controllers/registrationController"
);

const optionalAuth = require(
    "../middlewares/optionalAuth"
);


//admin
router.get(
    "/project/:projectId",
    auth,
            checkStatus,  checkPermission("get_project_registration"),
    registrationController.getProjectRegistrations
);


router.get(
    "/my-registrations",
     auth,
            checkStatus,  checkPermission("get_myproject_registration"),
    registrationController.getMyRegistrations
);
router.get(
    "/view/:id",
    auth,
            checkStatus,  checkPermission("view_project_registration"),
    registrationController.viewProjectRegistrations
);

//website
router.post(
    "/register/:id",
    optionalAuth,
    registrationController.registerProject
);



module.exports = router;