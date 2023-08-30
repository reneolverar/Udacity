import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import SearchBookInputField from "./SearchBooksInputField"
import * as BooksAPI from "../../BooksAPI"
import BookShelf from "../bookshelfs/BookShelf"
import { useState, useEffect } from "react"

export default function SearchBooks(props) {
    const { books, onShelfChange } = props
    const [searchResults, setSearchResults] = useState(null)

    useEffect(() => {
        if (searchResults !== null) {
            updateBookShelfs(searchResults)
        }
    }, [books])

    const updateBookShelfs = (results) => {
        const updatedResults =
            results &&
            results.length > 0 &&
            results.map(
                (book) => books.find(({ id }) => id === book.id) || book
            )
        setSearchResults(updatedResults)
    }

    const searchInputChange = async (query) => {
        if (query !== "") {
            const res = await BooksAPI.search(query, 20)
            updateBookShelfs(res)
        } else {
            setSearchResults("")
        }
    }

    const updateResultsShelf = async (booksToMove, shelf, bulk = "") => {
        if (bulk === "bulk") {
            await onShelfChange(booksToMove, shelf, "bulk")
        } else {
            await onShelfChange(booksToMove, shelf)
        }
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
                        shelf={{ name: "Search Results", id: "searchResults" }}
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
