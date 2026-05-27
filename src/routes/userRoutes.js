// routes/userRoutes.js

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

const userController = require(
    "../controllers/userController"
);


// Create User
router.post(

    "/create",

    auth,

    checkStatus,

    checkPermission("create_user"),

    upload.single("profileImage"),

    userController.createUser

);


// Update User
router.put(

    "/update/:id",

    auth,

    checkStatus,

    checkPermission("update_user"),

    upload.single("profileImage"),

    userController.updateUser

);


// User List
router.get(

    "/",

    auth,

    checkStatus,

    checkPermission("get_user"),

    userController.getUsers

);


// Single User
router.get(

    "/view/:id",

    auth,

    checkStatus,

    checkPermission("view_user"),

    userController.getUserById

);


// Delete User
router.delete(

    "/delete/:id",

    auth,

    checkStatus,

    checkPermission("delete_user"),

    userController.deleteUser

);


//ownprofile
router.get(

    "/myprofile",

    auth,

    checkStatus,

    checkPermission("own_profile"),

    userController.getOwnUser

);
// Update OwnUser
router.put(

    "/update",

    auth,

    checkStatus,

    checkPermission("own_update_user"),

    upload.single("profileImage"),

    userController.updateOwnUser

);

module.exports = router;