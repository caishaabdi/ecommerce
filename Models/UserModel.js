import mongoose, { Schema } from "mongoose";

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false
    },


})

const UserModel = mongoose.model("users", UserSchema)
export default UserModel