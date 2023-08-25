import PropTypes from "prop-types"
import Book from "./Book"

export default function BookShelf(props) {
    const { shelf = null, books, onShelfChange, isSearchResults = false } = props
    console.log(isSearchResults);
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{isSearchResults ? "Search Results" : shelf.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => (
                        <li key={book.id}>
                            <Book
                                book={book}
                                onShelfChange={onShelfChange}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
}
