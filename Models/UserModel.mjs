import { model, Schema } from "mongoose";

const userSchema = new Schema({
        first_name:{
            type:String,  // data Type
            required:true, // Validate
        },  
        last_name:{
            type:String,  // data Type
            required:true, // Validate
        },  
        dob:{
            type:String,  // data Type
            required:true, // Validate
        },  
        designation:{
            type:String,  // data Type
            required:true, // Validate
        },  
        mobile:{
            type:String,  // data Type
            required:true, // Validate
        },  
        gmail:{
            type:String,  // data Type
            required:true, // Validate
             unique:true
        },          
        age:{
            type:Number,  // data Type
            required:true, // Validate
        },  
        gender:{
            type:String,  // data Type
            required:true, // Validate
        },  
        fb_profile:{
            type:String,  // data Type
            required:true, // Validate
        },  
        profilePicture:{
            type:String,  // data Type
        },  
        address:{
            type:String,  // data Type
            required:true, // Validate
        }
},{
    timestamps:true,
})

const UserModel = model("CRUDUsers",userSchema)

export default UserModel;