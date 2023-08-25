import PropTypes from "prop-types"
import Book from "./Book"

export default function SearchBookResults(props) {
    const { searchResults, onShelfChange } = props
    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {searchResults.length > 0 &&
                    searchResults.map((book) => (
                        <li key={book.id}>
                            <Book
                                book={book}
                                onShelfChange={onShelfChange}
                            />
                        </li>
                    ))}
            </ol>
        </div>
    )
}

SearchBookResults.propTypes = {
    searchResults: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
}
