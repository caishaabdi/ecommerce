import express from "express"
import ConnectDBi from "./Database/db.js"
import UserRouter from './router/UserRouter.js';
import dotenv from 'dotenv'


dotenv.config()
ConnectDBi()
const app = express()
app.use(express.json())
app.use('api/user', UserRouter)


const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`server is runing on port ${port}`)
})