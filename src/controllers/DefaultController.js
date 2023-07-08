const DefaultController = {};

DefaultController.index = (req, res, next) => {
	res.status(200).json({ status: "OK", message: "Index" });
}

module.exports = DefaultController;