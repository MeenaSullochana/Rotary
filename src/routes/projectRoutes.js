const router = require("express").Router();
const checkPermission = require("../middlewares/checkPermission");
const auth  = require("../middlewares/authCheck");
const checkStatus = require("../middlewares/checkStatus");

const projectController = require("../controllers/projectController");

const upload = require("../middlewares/upload");
//admin
router.post(
    "/create", auth,
        checkStatus,  checkPermission("create_project"),
        
    upload.array("images", 10),
    projectController.createProject
);
router.put(
    "/update/:id",auth,
        checkStatus,  checkPermission("update_project"),
    upload.array("images", 10),
    projectController.updateProject
);
router.get(
    "/my-projects",
    auth, checkStatus,checkPermission("get_project"),
    projectController.getMyProjects
);

router.get(
    "/view/:id",auth, checkStatus,checkPermission("view_project"),
    projectController.getProjectById
);
router.delete(
    "/delete/:id",
    auth, checkStatus,checkPermission("delete_project"),
    projectController.deleteProject
);


//website


router.get(
    "/type/:type",
    projectController.getProjectsByType
);
router.get(
    "/web_view/:id",
    projectController.getProjectById
);
module.exports = router;