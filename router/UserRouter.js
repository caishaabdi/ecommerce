import express from "express";
import { login, resgister } from "../Controllers/UserController.js";
// const router = express.Router()

// router.route('/').post(register)
// router.route('/login').post(login)

// export default router
//////////////////////////////////////



const router = express.Router()

router.route('/').post(resgister)
// router.route('/Profile').post(getUserProfile)
router.route('/login').post(login)

export default router