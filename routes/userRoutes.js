const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth");
const utilisateurController = require("../controllers/userController");

router.post("/", utilisateurController.createUtilisateur);
router.get("/", utilisateurController.getUtilisateurs);
router.get("/:id", authenticate, utilisateurController.getUtilisateurById);
router.post("/login", utilisateurController.login);


module.exports = router;
