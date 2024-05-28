import express from "express";
import booksRouter from "./routes/books.routes.js" 

//inicializar el servidor
const app = express()
const PORT = 8080
//middlewares
app.use(express.json()) //req.body
app.use(express.urlencoded({extended: true})) //req.params -> url

//FIXED
app.use('/books', booksRouter)

app.listen(PORT, () => {
    console.log("Server listening...")
})
app.on("error", (error) => {
    console.log(`Error: ${error}`)
})
