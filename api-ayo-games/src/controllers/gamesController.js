const games = require("../models/games.json");
const fs = require("fs");

const getAllGames = (req, res) => {
  res.status(200).send(games);
};

const getGameById = (req, res) => {
  try {
    const gameId = req.params.id;
    const gameFound = games.find((game) => game.id == gameId);

    if (gameFound) {
      res.status(200).send(gameFound);
    } else {
      res.status(404).send({ message: "Game not found" });
    }
  } catch (err) {
    res.status(500).send({ message: "Internal server error" });
  }
};

const registerGame = (req, res) => {
  try {
    const id = games[games.length - 1].id + 1;
    const { title, launchYear, consoles, liked, stages } = req.body;
    games.push({ id, title, launchYear, consoles, liked, stages });

    fs.writeFile(
      "./src/models/games.json",
      JSON.stringify(games),
      "utf8",
      (err) => {
        if (err) {
          return res.status(424).send({ message: err });
        }
        console.log("Game successfully added!");
      }
    );
    res.status(200).send(games);
  } catch {
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = {
  getAllGames,
  getGameById,
  registerGame,
};
