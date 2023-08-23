import {React, useEffect, useState} from 'react'
import PropTypes from 'prop-types'

function ShelfChanger(props) {
    const { book, onShelfChange } = props
    const { shelf } = book
    const [selectedShelf ,setSelectedShelf] = useState(shelf)

    const handleChange = (e) => {
        setSelectedShelf(e.target.value)
    }

  return (
    <div className="book-shelf-changer">
          <select value={selectedShelf} onChange={ handleChange }>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    </div>
  )
}

ShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func.isRequired,
}

export default ShelfChanger
