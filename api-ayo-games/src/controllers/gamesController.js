const games = require("../models/games.json");

const getAllGames = (req, res) => {
  res.status(200).send(games);
};

const getGameById = (req, res) => {
  const gameId = req.params.id;
  const gameFound = games.find(game => game.id == gameId);

  if (gameFound) {
    res.status(200).send(gameFound);
  } else {
    res.status(404).send({ message: "Game not found" });
  }
};

module.exports = {
  getAllGames,
  getGameById,
};
