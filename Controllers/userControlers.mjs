import UserModel from "../model/userModel.mjs";

class UserController{

    // Create new user------------------------------------------------------------------------------------------------------------------------------
createNewUser = async(req,res)=>{
    const data = req.body;
    try {
        const newUser = await UserModel.create(data)
         return res.status(201).json({
                    msg : "User Created Successfull",
                    data : newUser,
        });  

        
    } catch (error) {
        console.log(error);

           if(error.code===11000){
              return res.status(409).json({
            msg : "error",
            error : "This Username Already registerd",
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

getUserById = async(req,res)=>{
    try {
        const user = await UserModel.findOne({_id:req.params.id})
           return  res.status(200).json({
                    msg : " Users by ID",
                    data : user,
        }); 
        
    } catch (error) {
        res.status(500).json({
                    msg : "error",
                    error : "Internal Server Error",
        });    
        
    }
}

    
}

export default new UserController();