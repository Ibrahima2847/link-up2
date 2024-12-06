const express = require("express");
const router = express.Router();
const { upload, uploadToAzure } = require("../middlewares/upload");
const contenuController = require("../controllers/contentController");
const authenticate = require("../middlewares/auth");


router.post("/create", upload.single("media"), uploadToAzure,authenticate, contenuController.createContenuWithMedia);

module.exports = router;
