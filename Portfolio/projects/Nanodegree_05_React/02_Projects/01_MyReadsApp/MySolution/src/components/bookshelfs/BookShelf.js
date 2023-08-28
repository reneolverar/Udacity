import PropTypes from "prop-types"
import { Droppable } from "@hello-pangea/dnd"
import Book from "../book/Book"

export default function BookShelf(props) {
    const {
        shelf = null,
        books,
        onShelfChange,
        isSearchResults = false,
    } = props

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">
                {isSearchResults ? "Search Results" : shelf.name}
            </h2>
            <div className="bookshelf-books">
                <Droppable
                    droppableId={`${shelf ? shelf.id : "searchResults"}`}
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
                                            isDragDisabled={isSearchResults}
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
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
}
