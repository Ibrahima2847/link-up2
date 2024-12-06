const sequelize = require("../models/db");
const Utilisateur = require("../models/user");
const Contenu = require("../models/content");
const Media = require("../models/media");
const Commentaire = require("../models/comment");

// Relations

// Un utilisateur peut créer plusieurs contenus
Utilisateur.hasMany(Contenu, { foreignKey: "user_id", as: "userContenus" }); // Alias unique : userContenus
Contenu.belongsTo(Utilisateur, { foreignKey: "user_id", as: "creator" }); // Alias unique : creator

// Un contenu peut avoir plusieurs médias
Contenu.hasMany(Media, { foreignKey: "contenu_id", as: "associatedMedias" }); // Alias unique : associatedMedias
Media.belongsTo(Contenu, { foreignKey: "contenu_id", as: "mediaContent" }); // Alias unique : mediaContent

// Un contenu peut recevoir plusieurs commentaires
Contenu.hasMany(Commentaire, { foreignKey: "contenu_id", as: "contentCommentaires" }); // Alias unique : contentCommentaires
Commentaire.belongsTo(Contenu, { foreignKey: "contenu_id", as: "commentContent" }); // Alias unique : commentContent

// Un utilisateur peut écrire plusieurs commentaires
Utilisateur.hasMany(Commentaire, { foreignKey: "user_id", as: "userCommentaires" }); // Alias unique : userCommentaires
Commentaire.belongsTo(Utilisateur, { foreignKey: "user_id", as: "authorCommentaires" }); // Alias unique : authorCommentaires

// Synchronisation de la base de données
const synchronizeDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); // Met à jour les tables existantes
    console.log("Les tables ont été synchronisées avec succès !");
  } catch (error) {
    console.error("Erreur lors de la synchronisation des tables :", error);
  }
};

module.exports = synchronizeDatabase;
