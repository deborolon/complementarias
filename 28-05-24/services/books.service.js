import models from "../models/books.model.js"

const getBooks = async () => {
    const booksModel = await models.getBooks()
    return booksModel
}

const deleteBooks = async (id) => {
    const book = await models.deleteBooks(id)
    return book
}

export default {
    getBooks,
    deleteBooks
}