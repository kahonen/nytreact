const router = require("express").Router();
const articleController = require("../../controllers/articleController");
const axios = require("axios");

// Matches with "/api/article"
router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);


// Matches with "/api/article/:id"
router
  .route("/:id")
  .get(articleController.findById)
  .post(articleController.update)
  .delete(articleController.remove);

module.exports = router;

