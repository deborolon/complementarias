import express from "express";
import controller from "../controllers/products.controller.js" 

const router = express.Router()

router.get('/', controller.getProducts)

export default router