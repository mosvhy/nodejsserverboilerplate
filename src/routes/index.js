const express = require("express");
const routes = express.Router();
const controllers = require("../controllers");
const UserModel = require("../models/UserModel");
const UserController = require("../controllers/UserController");

routes.get("/",controllers.DefaultController.index);
routes.get("/users", controllers.UserController.index);
routes.get("/users/save", controllers.UserController.save);
routes.get("/migrate", (req, res, next) => {
    UserModel.migrate();
    res.status(200).json({
        status:'ok',
    });
});

module.exports = routes;