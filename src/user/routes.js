const { Router } = require("express");
const userRouter = Router();

const { hashPass } = require("../middleware/index");
const { register, login, getAllUsers } = require("./controllers");

userRouter.post("/", hashPass, register);

userRouter.post("/login", login);

userRouter.get("/", getAllUsers);

module.exports = userRouter;
