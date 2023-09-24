import express from "express"
import ConnectDBi from "./Database/db.js"
import UserRouter from './router/UserRouter.js';

ConnectDBi()
const app = express()
app.use(express.json())
app.use('api/users', UserRouter)


const port = process.env.PORT || 5000

app.listen(() => {
    console.log(`server is runing on port ${port}`)
})