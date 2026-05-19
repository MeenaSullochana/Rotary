const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        let folder = "uploads/common";

        // Projects
        if (req.originalUrl.includes("projects")) {
            folder = "uploads/projects";
        }

        // Sliders
        if (req.originalUrl.includes("sliders")) {
            folder = "uploads/sliders";
        }
       if (req.originalUrl.includes("gallery")) {
            folder = "uploads/gallery";
        }
        if (req.originalUrl.includes("siteSetting")) {
            folder = "uploads/siteSetting";
        }
           if (req.originalUrl.includes("blog")) {
            folder = "uploads/blog";
        }
        // Profiles
        if (req.originalUrl.includes("profile")) {
            folder = "uploads/profiles";
        }

        // Create folder automatically
        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder, {
                recursive: true
            });
        }

        cb(null, folder);

    },

    filename: (req, file, cb) => {

        cb(
            null,
            Date.now() +
            "-" +
            Math.round(Math.random() * 1E9) +
            path.extname(file.originalname)
        );

    }

});

const upload = multer({ storage });

module.exports = upload;



// const multer = require("multer");
// const path = require("path");

// const storage = multer.diskStorage({

//     destination: (req, file, cb) => {

//         cb(null, "uploads/projects");

//     },

//     filename: (req, file, cb) => {

//         cb(
//             null,
//             Date.now() +
//             "-" +
//             Math.round(Math.random() * 1E9) +
//             path.extname(file.originalname)
//         );

//     }

// });

// const upload = multer({ storage });

// module.exports = upload;