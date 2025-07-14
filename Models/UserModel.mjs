import { model, Schema } from "mongoose";

const userSchema = new Schema({
          name:{
            type:String,  // data Type
            required:true, // Validate
        },  
        gmail:{
            type:String,  // data Type
            required:true, // Validate
        },          
        age:{
            type:Number,  // data Type
            required:true, // Validate
        },  
        address:{
            type:String,  // data Type
            required:true, // Validate
        }
},{
    timestamps:true,
})

const UserModel = model("Users",userSchema)

export default UserModel;