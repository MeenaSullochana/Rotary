// routes/blogRoutes.js

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

const blogController = require(
    "../controllers/blogController"
);


// Create Blog
router.post(

    "/create",

    auth,

    checkStatus,

    checkPermission("create_blog"),

    upload.single("image"),

    blogController.createBlog

);


// Update Blog
router.put(

    "/update/:id",

    auth,

    checkStatus,

    checkPermission("update_blog"),

    upload.single("image"),

    blogController.updateBlog

);


// Blog List
router.get(

    "/",

    auth,

    checkStatus,

    checkPermission("get_blog"),

    blogController.getBlogs

);


// Single Blog View
router.get(

    "/view/:id",

    auth,

    checkStatus,

    checkPermission("view_blog"),

    blogController.getBlogById

);


// Delete Blog
router.delete(

    "/delete/:id",

    auth,

    checkStatus,

    checkPermission("delete_blog"),

    blogController.deleteBlog

);


// Website Blogs
router.get(

    "/web",

    blogController.getBlogsWeb

);

module.exports = router;