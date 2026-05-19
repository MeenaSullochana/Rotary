// services/blogService.js

const Blog = require("../models/Blog");


// Create Blog
exports.createBlog = async (
    body,
    userId
) => {

    return await Blog.create({

        ...body,

        createdBy: userId

    });

};


// Update Blog
exports.updateBlog = async (
    id,
    body
) => {

    return await Blog.findByIdAndUpdate(

        id,

        body,

        {
            new: true
        }

    );

};


// Blog List
exports.getBlogs = async () => {

    return await Blog.find()
        .populate("createdBy", "name email")
        .sort({ createdAt: -1 });

};


// Single Blog View
exports.getBlogById = async (
    id
) => {

    return await Blog.findById(id)
        .populate(
            "createdBy",
            "name email"
        );

};


// Delete Blog
exports.deleteBlog = async (
    id
) => {

    return await Blog.findByIdAndDelete(
        id
    );

};


// Website Blogs
exports.getBlogsWeb = async () => {

    return await Blog.find({

        status: "active"

    })
    .sort({ createdAt: -1 });

};