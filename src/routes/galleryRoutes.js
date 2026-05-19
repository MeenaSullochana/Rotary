// routes/sliderRoutes.js

const router = require("express").Router();
const checkPermission = require("../middlewares/checkPermission");
const auth  = require("../middlewares/authCheck");
const checkStatus = require("../middlewares/checkStatus");
const sliderController = require(
    "../controllers/galleryController"
);

const upload = require(
    "../middlewares/upload"
);




router.post(
    "/create",
    auth,
                checkStatus,  checkPermission("create_gallery"),
    upload.single("image"),
    sliderController.createGallery
);


router.put(
    "/update/:id",
    auth,
                checkStatus,  checkPermission("update_slider"),
    upload.single("image"),
    sliderController.updateGallery
);


router.get(
    "/",auth,
                checkStatus,  checkPermission("get_slider"),
    sliderController.getSliders
);


router.get(
    "/view/:id",auth,
                checkStatus,  checkPermission("view_slider"),
    sliderController.getSliderById
);


router.delete(
    "/delete/:id",
    auth,
                checkStatus,  checkPermission("delete_slider"),
    sliderController.deleteSlider
);


///website
router.get(
    "/web",
    sliderController.getSlidersWeb
);

module.exports = router;