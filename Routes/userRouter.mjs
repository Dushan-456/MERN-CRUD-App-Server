import { Router } from "express";
import userControlers from "../Controllers/userControlers.mjs";
import { userDataValidator } from "../Utils/validationMethods.mjs";

const userRouter = Router();

userRouter.post("/add-user", userDataValidator(), userControlers.createNewUser);

userRouter.put("/update-user/:id",userDataValidator(), userControlers.updateUser);

userRouter.delete("/delete-user/:id", userControlers.deleteUser);

userRouter.get("/all-users", userControlers.showAllUsers);

userRouter.get("/:id", userControlers.getUserById);

export default userRouter;
