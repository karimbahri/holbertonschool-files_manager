/* eslint-disable */

const route = require("express").Router();
const AppController = require("../controllers/AppController");
const UsersController = require("../controllers/UsersController");

route
  .get("/status", AppController.getStatus)
  .get("/stats", AppController.getStat)
  .post("/users", UsersController.postNew);

module.exports = route;
