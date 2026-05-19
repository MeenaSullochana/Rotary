// controllers/blogController.js

const blogService = require(
    "../services/blogService"
);


// Create Blog
exports.createBlog = async (
    req,
    res
) => {

    try {

        const body = {

            ...req.body,

            image: req.file
                ? req.file.path
                : null

        };

        const data =
            await blogService.createBlog(

                body,

                req.user?._id || null

            );

        return res.status(201).json({

            status: true,

            message:
                "Blog created successfully",

            data

        });

    } catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};


// Update Blog
exports.updateBlog = async (
    req,
    res
) => {

    try {

        const body = {
            ...req.body
        };

        if (req.file) {

            body.image = req.file.path;

        }

        const data =
            await blogService.updateBlog(

                req.params.id,

                body

            );

        return res.status(200).json({

            status: true,

            message:
                "Blog updated successfully",

            data

        });

    } catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};


// Blog List
exports.getBlogs = async (
    req,
    res
) => {

    try {

        const data =
            await blogService.getBlogs();

        return res.status(200).json({

            status: true,

            data

        });

    } catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};


// Single Blog View
exports.getBlogById = async (
    req,
    res
) => {

    try {

        const data =
            await blogService.getBlogById(
                req.params.id
            );

        return res.status(200).json({

            status: true,

            data

        });

    } catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};


// Delete Blog
exports.deleteBlog = async (
    req,
    res
) => {

    try {

        const data =
            await blogService.deleteBlog(
                req.params.id
            );

        return res.status(200).json({

            status: true,

            message:
                "Blog deleted successfully",

            data

        });

    } catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};


// Website Blogs
exports.getBlogsWeb = async (
    req,
    res
) => {

    try {

        const data =
            await blogService.getBlogsWeb();

        return res.status(200).json({

            status: true,

            data

        });

    } catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};