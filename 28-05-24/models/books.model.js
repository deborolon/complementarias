const booksList = [
    {
        id: 1,
        nombre: "Cien años de Sol",
        año: 1982,
        estado: "disponible"
    },   
    {   
        id: 2,
        nombre: "Rayuela",
        año: 1963,
        estado: "no apto"
    },   
    {
        id: 3,
        nombre: "La vuelta al mundo en 80 días",
        año: 1872,
        estado: "alquilado"
    }   
]

const getBooks = async () => {
    return booksList
}

const deleteBooks = async (id) => {
    console.log('ID: ', id)
    // === -> comparacion valor y tipo de dato
    // == -> solo el valor
    const booksFiltered = await booksList.filter((e) => e.id == id)
    console.log('booksFiltered: ', booksFiltered)
    //splice
    return "Ok."
}

export default {
    getBooks,
    deleteBooks
}