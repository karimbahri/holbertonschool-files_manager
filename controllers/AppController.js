/* eslint-disable */
const DBClient = require("../utils/db");
const redisClient = require("../utils/redis");

/* -------------getStatus------------- */
exports.getStatus = (req, res) => {
  res.status(200).json({
    db: DBClient.isAlive(),
    redis: redisClient.isAlive(),
  });
};
exports.getStat = async (req, res) => {
  res.status(200).json({
    users: await DBClient.nbUsers(),
    files: await DBClient.nbFiles(),
  });
};
