import services from "../services/books.service.js"

const getBooks = async (req, res) => {
    const books = await services.getBooks()
    res.send(books)
}

const deleteBooks = async (req, res) => {
    const {id} = req.params
    const book = await services.deleteBooks(id)
    res.send(book)
}

export default {
    getBooks,
    deleteBooks
}