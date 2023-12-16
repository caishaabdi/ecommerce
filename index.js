import express from "express"
import ConnectDBi from "./Database/db.js"
import UserRouter from './router/UserRouter.js';
import productRouter from './router/productRouter.js';

import dotenv from 'dotenv'


dotenv.config()
ConnectDBi()
const app = express()
app.use(express.json())
app.use('/api/users', UserRouter)
app.use('/api/products', productRouter)



const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`server is runing on port ${port}`)
})