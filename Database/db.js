import mongoose from 'mongoose'

const ConnectDBi = () => {
    mongoose.connect(process.env.MANGO_URL)
        .then(() => {
            console.log("Database connected")
        });
}
export default ConnectDBi