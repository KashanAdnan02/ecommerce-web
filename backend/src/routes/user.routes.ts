import express from "express"
import { createUser, loginUser } from "../controllers/user.controller"
const userRoute = express.Router()

userRoute.post("/create-user", createUser)
userRoute.post("/login", loginUser)

export default userRoute