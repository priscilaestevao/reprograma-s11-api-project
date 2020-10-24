const express = require("express");
const router = express.Router();
const controller = require("../controllers/gamesController");

router.get("/", controller.getAllGames);
router.get("/:id", controller.getGameById);
router.post("/", controller.registerGame);

module.exports = router;