const express = require("express");
const routes = express.Router();
const controllers = require("../controllers");

routes.get("/",controllers.DefaultController.index);

module.exports = routes;