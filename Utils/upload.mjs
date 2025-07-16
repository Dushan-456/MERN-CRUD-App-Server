// middlewares/upload.js
import multer from "multer";
import path from "path";

// Configure storage
const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, 'uploads/'); // folder where images will be saved
   },
   filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      cb(null, `${Date.now()}-${file.fieldname}${ext}`);
   },
});

// Validate file type
const fileFilter = (req, file, cb) => {
   if (file.mimetype.startsWith("image/")) {
      cb(null, true);
   } else {
      cb(new Error("Only image files are allowed"), false);
   }
};

const upload = multer({ storage, fileFilter });

export default upload;
