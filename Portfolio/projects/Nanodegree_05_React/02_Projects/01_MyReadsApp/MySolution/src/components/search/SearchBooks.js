import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { useImmer } from "use-immer"
import SearchBookInputField from "./SearchBooksInputField"
import * as BooksAPI from "../../BooksAPI"
import BookShelf from "../bookshelfs/BookShelf"

export default function SearchBooks(props) {
    const { books, onShelfChange } = props
    const [searchResults, setSearchResults] = useImmer(null)

    const searchInputChange = async (query) => {
        if (query !== "") {
            const res = await BooksAPI.search(query, 20)
            const results =
                res &&
                res.length > 0 &&
                res.map(
                    (book) => books.find(({ id }) => id === book.id) || book
                )
            setSearchResults(results)
        } else {
            setSearchResults("")
        }
    }

    const updateResultsShelf = (book, shelf) => {
        setSearchResults((draft) => {
            const bookToUpdate = draft.find((b) => b.id === book.id)
            bookToUpdate.shelf = shelf
        })
        onShelfChange(book, shelf)
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link
                    className="close-search"
                    to="/"
                >
                    Close
                </Link>
                <SearchBookInputField onSearchInputChange={searchInputChange} />
            </div>
            <div>
                {searchResults && (
                    <BookShelf
                        isSearchResults
                        books={searchResults}
                        onShelfChange={updateResultsShelf}
                    />
                )}
            </div>
        </div>
    )
}

SearchBooks.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
}
