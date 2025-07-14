import mongoose from "mongoose";
import UserModel from "../Models/UserModel.mjs";
import { errorCreate } from "../Utils/error-creator.mjs";
import { matchedData, validationResult } from "express-validator";

class UserController{

    // Create new user------------------------------------------------------------------------------------------------------------------------------
createNewUser = async(req,res)=>{
    const error = validationResult(req);
    const creatingError = errorCreate(error.array())
    if(error.array().length){
        console.log(creatingError);
        
            return res.status(400).json({
                    msg : "error",
                    error : creatingError,
                    data : null,
                });
    }

    const {name,gmail,age,address} =  matchedData(req);
    try {
        const newUser = await UserModel.create({name,gmail,age,address})
         return res.status(201).json({
                    msg : "User Created Successfull",
                    data : newUser,
        });  

        
    } catch (error) {
        console.log(error);

           if(error.code===11000){
              return res.status(409).json({
            msg : "error",
            error : "This Email Already registerd",
            data : null,
        })
    }
        return res.status(500).json({
                    msg : "error",
                    error : "Internal Server Error",
        });        
    }


}


//Get All Users------------------------------------------------------------------------------------------------------------------------------
showAllUsers = async(req,res)=>{
    try {
        const users = await UserModel.find();
        return  res.status(200).json({
                    msg : "All Users",
                    data : users,
        });  

    } catch (error) {
         return res.status(500).json({
                    msg : "error",
                    error : "Internal Server Error",
        });    
        
    }
}

//Get  Users by ID------------------------------------------------------------------------------------------------------------------------------


getUserById = async (req, res) => {
    const id = req.params.id;

    if (id && id !== "") {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: "error",
                error: "Invalid ID format",
                data: null,
            });
        }

        try {
            const user = await UserModel.findById(id);
            if (user !== null) {
                return res.status(200).json({
                    msg: "user data",
                    data: user,
                });
            }

            return res.status(404).json({
                msg: "error",
                error: "User not found",
                data: null,
            });

        } catch (error) {
            return res.status(500).json({
                msg: "error",
                error: "Internal Server Error",
            });
        }
    } else {
        return res.status(400).json({
            msg: "error",
            error: "Missing ID",
            data: null,
        });
    }
}

}

export default new UserController();