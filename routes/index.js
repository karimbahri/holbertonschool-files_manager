/* eslint-disable */

const route = require("express").Router();
const AppController = require("../controllers/AppController");
const UsersController = require("../controllers/UsersController");
const AuthController = require("../controllers/AuthController");

route
  .get("/status", AppController.getStatus)
  .get("/stats", AppController.getStat)
  .post("/users", UsersController.postNew)
  .get("/connect", AuthController.getConnect)
  .get("/disconnect", AuthController.getDisconnect)
  .get("/users/me", UsersController.getMe);

module.exports = route;
