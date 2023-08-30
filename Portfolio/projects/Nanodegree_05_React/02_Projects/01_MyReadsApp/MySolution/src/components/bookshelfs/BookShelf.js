import PropTypes from "prop-types"
import { Droppable } from "@hello-pangea/dnd"
import Book from "../book/Book"
import { useState } from "react"
import ShelfChanger from "../book/ShelfChanger"

export default function BookShelf(props) {
    const { shelf, books, onShelfChange } = props

    const [bookIdsSelected, setBookIdsSelected] = useState([])

    const isSearchResults = shelf.id === "searchResults" ? true : false

    const selectBook = (book) => {
        if (bookIdsSelected.includes(book.id)) {
            setBookIdsSelected(bookIdsSelected.filter((id) => id !== book.id))
        } else {
            setBookIdsSelected([...bookIdsSelected, book.id])
        }
    }

    const bulkShelfChange = (shelf) => {
        setBookIdsSelected(() => [])
        onShelfChange(bookIdsSelected, shelf, "bulk")
    }

    const handleSelectClick = (event) => {
        bookIdsSelected.length === books.length
            ? setBookIdsSelected(() => [])
            : setBookIdsSelected(books.map((b) => b.id))
    }

    return (
        <div className="bookshelf">
            <div className="bookshelf-title flex">
                <h2 className="">{shelf.name}</h2>
                {bookIdsSelected.length > 0 && (
                    <>
                        <div className="shelf-bulk-options relative">
                            <ShelfChanger
                                shelfId={"bulkSelect"}
                                onShelfChange={(shelf) =>
                                    bulkShelfChange(shelf)
                                }
                            />
                        </div>
                        <button onClick={(e) => handleSelectClick(e)}>
                            {bookIdsSelected.length < books.length
                                ? "Select all"
                                : "Deselect all"}
                        </button>
                    </>
                )}
            </div>
            <div className="bookshelf-books">
                <Droppable
                    droppableId={shelf.id}
                    isDropDisabled={isSearchResults}
                >
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            <ol className="books-grid">
                                {books.map((book, index) => (
                                    <li key={book.id}>
                                        <Book
                                            index={index}
                                            book={book}
                                            onShelfChange={onShelfChange}
                                            isDragDisabled={
                                                isSearchResults ||
                                                bookIdsSelected.length > 0
                                            }
                                            bookSelected={bookIdsSelected.includes(
                                                book.id
                                            )}
                                            showSelection={
                                                bookIdsSelected.length > 0
                                            }
                                            onSelectBook={selectBook}
                                        />
                                    </li>
                                ))}
                                {provided.placeholder}
                            </ol>
                        </div>
                    )}
                </Droppable>
            </div>
        </div>
    )
}

BookShelf.propTypes = {
    shelf: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
}
