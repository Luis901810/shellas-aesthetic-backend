const { Router } = require("express");
const userRouter = Router();

userRouter.get("/")
userRouter.get("/:id")
userRouter.post("/")
userRouter.put("/:id")
userRouter.delete("/:id")

module.exports = userRouter;