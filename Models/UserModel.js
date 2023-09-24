import mongoose, { Schema } from "mongoose";

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    Address: {
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

const User = mongoose.model("Users ", UserSchema)
export default User