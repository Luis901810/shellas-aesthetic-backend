const { Router } = require("express");

const reviewsRouter = Router();

reviewsRouter.get("/", require("../controllers/controllerReviews/getReviews") )
reviewsRouter.post("/", require("../controllers/controllerReviews/createReviews"))
module.exports = reviewsRouter;