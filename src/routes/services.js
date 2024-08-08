const { Router } = require("express");
const serviceRouter = Router();

serviceRouter.get("/");
serviceRouter.get("/:id")
serviceRouter.post("/");
serviceRouter.put("/:id")
serviceRouter.delete("/:id")

module.exports = serviceRouter;