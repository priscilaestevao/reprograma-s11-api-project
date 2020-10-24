const games = require("../models/games.json");

const getAllGames = (req, res) => {
  console.log(req.url);
  res.status(200).send(games);
};

module.exports = {
    getAllGames
};
