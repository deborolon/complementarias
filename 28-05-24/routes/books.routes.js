import express from "express";
import controller from "../controllers/books.controller.js" 

const router = express.Router()

router.get('/', controller.getBooks)
router.delete('/:id', controller.deleteBooks)

export default router