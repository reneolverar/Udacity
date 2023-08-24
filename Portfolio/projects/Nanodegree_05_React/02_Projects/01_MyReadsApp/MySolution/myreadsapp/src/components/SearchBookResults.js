import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import { search } from '../BooksAPI'

function SearchBookResults(props) {
    const { books, searchResults, onShelfChange } = props
  return (
    <div className="search-books-results">
        <ol className="books-grid">
            {searchResults.length > 0 && searchResults.map(book => (
                <li key={book.id}>
                    < Book book={book} onShelfChange={onShelfChange} />
                </li>
            ))}
        </ol>
    </div>
  )
}

SearchBookResults.propTypes = {
    books: PropTypes.array.isRequired,
    searchResults: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
}

export default SearchBookResults
