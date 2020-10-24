const express = require("express");
const router = express.Router();
const controller = require("../controllers/gamesController");

router.get("/", controller.getAllGames);

module.exports = router;