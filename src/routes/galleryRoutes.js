// routes/galleryRoutes.js

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

const galleryController = require(
    "../controllers/galleryController"
);

const upload = require(
    "../middlewares/upload"
);


// Create Gallery
router.post(

    "/create",

    auth,

    checkStatus,

    checkPermission("create_gallery"),

upload.single("image"),
    galleryController.createGallery

);


// Update Gallery
router.put(

    "/update/:id",

    auth,

    checkStatus,

    checkPermission("update_gallery"),

upload.single("image"),
    galleryController.updateGallery

);


// Gallery List
router.get(

    "/",

    auth,

    checkStatus,

    checkPermission("get_gallery"),

    galleryController.getGallery

);


// Gallery View
router.get(

    "/view/:id",

    auth,

    checkStatus,

    checkPermission("view_gallery"),

    galleryController.getGalleryById

);





// Delete Gallery
router.delete(

    "/delete/:id",

    auth,

    checkStatus,

    checkPermission("delete_gallery"),

    galleryController.deleteGallery

);


// Website Gallery
router.get(

    "/web",

    galleryController.getGalleryWeb

);

module.exports = router;