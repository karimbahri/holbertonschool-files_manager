/* eslint-disable */

const route = require("express").Router();

route
  .get("/status", AppController.getStatus)
  .get("/stats", AppController.getStats);

export default route;
