import PropTypes from "prop-types"
import { useState } from "react"
import { useImmer } from "use-immer"
import SearchBookInputField from "./SearchBooksInputField"
import SearchBooksResults from "./SearchBooksResults"
import * as BooksAPI from "../BooksAPI"

export default function SearchBooks(props) {
    const { books, onShelfChange, onCloseSearch } = props
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
                <a
                    className="close-search"
                    onClick={onCloseSearch}
                >
                    Close
                </a>
                <SearchBookInputField onSearchInputChange={searchInputChange} />
            </div>
            {searchResults && (
                <SearchBooksResults
                    searchResults={searchResults}
                    onShelfChange={updateResultsShelf}
                />
            )}
        </div>
    )
}

SearchBooks.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
    onCloseSearch: PropTypes.func.isRequired,
}
