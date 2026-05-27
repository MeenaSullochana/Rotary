// controllers/userController.js

const userService = require(
    "../services/userService"
);


// Create User
exports.createUser = async (
    req,
    res
) => {

    try {

        const body = {

            ...req.body,

            profileImage:
                req.file
                ? req.file.path
                : null

        };

        const data =
            await userService.createUser(

                body,

                req.user?._id || null

            );

        return res.status(201).json({

            status: true,

            message:
                "User created successfully",

            data

        });

    }

    catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};


// Update User
exports.updateUser = async (
    req,
    res
) => {

    try {

        const body = {
            ...req.body
        };

        if (req.file) {

            body.profileImage =
                req.file.path;

        }

        const data =
            await userService.updateUser(

                req.params.id,

                body,

                req.user?._id || null

            );

        return res.status(200).json({

            status: true,

            message:
                "User updated successfully",

            data

        });

    }

    catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};

//ownupdateuser
exports.updateOwnUser = async (
    req,
    res
) => {

    try {

        const body = {
            ...req.body
        };

        if (req.file) {

            body.profileImage =
                req.file.path;

        }

        const data =
            await userService.updateOwnUser(

                req.user._id,

                body,

                req.user?._id || null

            );

        return res.status(200).json({

            status: true,

            message:
                "User updated successfully",

            data

        });

    }

    catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};




exports.getUsers = async (
    req,
    res
) => {

    try {

        let filter = {};



        // ALL USERS
        const allUser =
            req.user.roles.some(
                role =>
                    role.permissions.includes(
                        "all_user"
                    )
            );



        // MY USERS
        const myUser =
            req.user.roles.some(
                role =>
                    role.permissions.includes(
                        "my_user"
                    )
            );





        if (allUser) {

            filter = {};

        }

        else if (myUser) {

            filter = {

                createdBy:
                    req.user.id

            };

        }

       

        else {

            return res.status(403).json({

                status: false,

                message:
                    "Permission denied"

            });

        }

        const data =
            await userService.getUsers(
                filter
            );

        return res.status(200).json({

            status: true,

            data

        });

    }

    catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};

// Single User
exports.getUserById = async (
    req,
    res
) => {

    try {

        const data =
            await userService.getUserById(
                req.params.id
            );

        return res.status(200).json({

            status: true,

            data

        });

    }

    catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};

//ownprofile
exports.getOwnUser = async (
    req,
    res
) => {

    try {

        const data =
            await userService.getOwnUser(
                    req.user.id            );

        return res.status(200).json({

            status: true,

            data

        });

    }

    catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};

// Delete User
exports.deleteUser = async (
    req,
    res
) => {

    try {

        const data =
            await userService.deleteUser(
                req.params.id
            );

        return res.status(200).json({

            status: true,

            message:
                "User deleted successfully",

            data

        });

    }

    catch (err) {

        return res.status(500).json({

            status: false,

            message: err.message

        });

    }

};