import express from "express"
import { createproduct, deleteproduct, getProduct, updateproduct } from "../Controllers/productController.js"

const router = express.Router()

router.route('/').post(createproduct).get(getProduct)
router.route('/:id').put(updateproduct).delete(deleteproduct);


export default router