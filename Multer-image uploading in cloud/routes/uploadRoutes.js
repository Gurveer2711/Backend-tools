import express from "express";
import upload from "../middlewares/uploadMiddleware.js";

const router = express.Router();

// Upload image to local 'uploads/' folder
router.post("/local", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  res.json({ message: "File uploaded successfully", filePath: req.file.path });
});

export default router;
