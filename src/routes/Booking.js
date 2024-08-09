const {Router }  = require("express")

const BookingRouter = Router();

BookingRouter.get("/")
BookingRouter.get("/:id")
BookingRouter.post("/")
BookingRouter.put("/:id")
BookingRouter.delete("/:id")

module.exports = BookingRouter;