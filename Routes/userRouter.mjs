import { Router } from "express";
import userControlers from "../Controllers/userControlers.mjs";

const userRouter = Router()

userRouter.post("/create",userControlers.createNewUser)

userRouter.get("/all",userControlers.showAllUsers)

userRouter.get("/:id",userControlers.getUserById)



export default userRouter;