import { useState } from "react";
import PropTypes from 'prop-types'
import _ from lodash


export default function BookSearchBox({onSearchInputChange}) {

    const [query, setQuery] = useState("")



    const handleInputChange = (query) => {
        setQuery(query)
        _.debounce(onSearchInputChange(query))
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


