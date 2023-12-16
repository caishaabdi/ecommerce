import express from "express"
import { createproduct, deleteproduct, updateproduct } from "../Controllers/productController.js"

const router = express.Router()

router.route('/').post(createproduct)
router.route('/:id').put(updateproduct).delete(deleteproduct);


export default router