import React from 'react'
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'

function Book(props) {
    const { title, authors, imageLinks} = props.book
    const onShelfChange = props.onShelfChange
    return (
        <div className="book">
            <div className="book-top">
            <div
                className="book-cover"
                style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${imageLinks.smallThumbnail}")`,
                }}
            ></div>
                <ShelfChanger
                    book={props.book}
                    onShelfChange={onShelfChange}
                />
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors}</div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired,
}

export default Book
