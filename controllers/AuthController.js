/* eslint-disable */
const uuid = require("uuid").v4;
const redisClient = require("../utils/redis");
const DBClient = require("../utils/db");
const sha1 = require("sha1");

const unauthorized = (response) =>
  response.status(401).json({ error: "Unauthorized" });

exports.getConnect = async (req, res) => {
  const authorization = req.headers.authorization;

  if (!authorization) return unauthorized(res);
  if (!(authorization.substring(0, 6) === "Basic")) return unauthorized(res);

  const auth_64 = Buffer.from(authorization.substring(6), "base64").toString(
    "utf-8"
  );
  const user_credentials = auth_64.split(":");

  if (!user_credentials[0] || !user_credentials[1]) return unauthorized(res);

  const token = uuid();
  const key = `auth_${token}`;

  const usr = await DBClient.db
    .collection("users")
    .findOne({ email: [user_credentials] });

  if (!usr) return unauthorized(res);

  if (!usr.password || usr.password !== sha1(user_credentials[1]))
    return unauthorized(res);

  redisClient.set(key, usr._id.toString(), 86400); // 24h in seconds
  return res.status(200).json({ token });
};

exports.getDisconnect = async (req, res) => {
  await redisClient.del(`auth_${req.token}`);

  return res.status(204).send();
};
