/* eslint-disable */

const route = require("express").Router();
const AppController = require("../controllers/AppController");

route
  .get("/status", AppController.getStatus)
  .get("/stats", AppController.getStat);

export default route;
