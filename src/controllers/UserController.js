const UserModel = require("../models/UserModel");

const UserController = {};

UserController.index = async (req, res, next) => {
    const users = await UserModel.findAndCountAll();
	res.status(200).json({ status: "OK", message: "Index", data: users });
}

UserController.save = async (req, res, next) => {
    const name = Math.random().toString(36).substr(2, 8);
    const user = await UserModel.create({
        name: name,
        email: `${name}@mail.dev`,
    });
    res.status(200).json({ status: "OK", message: "Index", data: user });
}

module.exports = UserController;
