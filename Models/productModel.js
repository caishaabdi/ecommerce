import mongoose from "mongoose";

const productschema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countinstock: {
        type: Number,
        required: true
    },



})

const product = mongoose.model('product', productschema)

export default product