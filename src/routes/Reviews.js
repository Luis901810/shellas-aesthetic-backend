const { Router } = require("express");

const reviewsRouter = Router();

reviewsRouter.get("/", require("../controllers/controllerRewies/getRewies") )

module.exports = reviewsRouter;