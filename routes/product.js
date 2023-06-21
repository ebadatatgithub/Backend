import express from 'express'
import { getProduct,addProduct } from '../controller/productController.js'

const router = express.Router()

router.get('/',getProduct)
router.post('/',addProduct)


export default router
