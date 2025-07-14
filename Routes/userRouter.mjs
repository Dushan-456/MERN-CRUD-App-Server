import { Router } from "express";
import userControlers from "../Controllers/userControlers.mjs";
import {  userCreateValidator } from "../Utils/validationMethods.mjs";

const userRouter = Router()

userRouter.post("/create",userCreateValidator(),userControlers.createNewUser)

userRouter.get("/all-users",userControlers.showAllUsers)

userRouter.get("/:id",userControlers.getUserById)



export default userRouter;