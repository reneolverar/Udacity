import { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import * as BooksAPI from "../BooksAPI";

function BookSearchBox({onSearchInputChange}) {

    const [query, setQuery] = useState("")



    const handleInputChange = (query) => {
        setQuery(query)
        onSearchInputChange(query)
    }



  return (
    <div className="search-books-input-wrapper">
        <input
            value={query}
            onChange={(event) => handleInputChange(event.target.value)}
            type="text"
            placeholder="Search by title, author, or ISBN"
        />
    </div>
  )
}

BookSearchBox.propTypes = {
    onSearchInputChange: PropTypes.func.isRequired,
}

export default BookSearchBox
