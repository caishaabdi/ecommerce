import mongoose, { Schema } from "mongoose";

// const UserSchema = mongoose.Schema({
//     name: {
//         type: String,
//         require: true
//     },
//     email: {
//         type: String,
//         require: true
//     },
//     password: {
//         type: String,
//         require: true
//     },
//     Address: {
//         type: String,
//         require: true
//     },
//     phone: {
//         type: Number,
//         require: true
//     },
//     isAdmin: {
//         type: Boolean,
//         require: true,
//         default: false
//     },


// })

// const UserModel = mongoose.model("users", UserSchema)
// export default UserModel

////////////////////////////////////////////
const userschema = mongoose.Schema({
    name:{
        type : String,
        required: true
    },
    email:{
        type : String,
        required: true
    },
    password:{
        type : String,
        required: true
    },
    phone:{
        type : Number,
        required: true
    },
    address:{
        type : String,
        required: true
    },
    isAdmin:{
        type : Boolean,
        required: true,
        default :false
    }

})

const users = mongoose.model("isticmaale",userschema)

export default users
  
  