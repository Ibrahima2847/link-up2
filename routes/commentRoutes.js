const express = require("express");
const router = express.Router();
const commentaireController = require("../controllers/commentController");

// Route pour ajouter un commentaire à un contenu
router.post("/", commentaireController.addComment);

module.exports = router;