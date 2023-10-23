const { Router } = require("express");
const userRouter = Router();

const { hashPass, comparePass } = require("../middleware/index");
const { register, login, getAllUsers } = require("./controllers");

userRouter.post("/", hashPass, register);

userRouter.post("/login", comparePass, login);

userRouter.get("/", getAllUsers);

module.exports = userRouter;
