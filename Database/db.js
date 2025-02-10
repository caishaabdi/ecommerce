// import mongoose from 'mongoose'

// const ConnectDBi = () => {
//     mongoose.connect(process.env.MANGO_URL, {

//     })
//         .then(() => {
//             console.log("Database connected")
//         });
// }
// export default ConnectDBi



import mongoose from 'mongoose';

const ConnectDBi = async () => {
    try {
        await mongoose.connect(process.env.MANGO_URL, {

        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error);
        process.exit(1); // Exit process with failure
    }
};

export default ConnectDBi;
