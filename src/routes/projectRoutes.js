const router = require("express").Router();

const projectController = require("../controllers/projectController");

const upload = require("../middlewares/upload");

router.post(
    "/create",
    upload.array("images", 10),
    projectController.createProject
);

module.exports = router;