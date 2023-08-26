import React from "react"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"
import ShelfChanger from "./ShelfChanger"

export default function Book(props) {

    let navigate = useNavigate()

    const {book, onShelfChange} = props
    const { title, authors, imageLinks } = book

    const handleClick = (e) => {
        navigate("/bookId/" + book.id)

    }

    return (
        <div
            className="book"
            onClick={handleClick}
        >
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: imageLinks
                            ? `url("${imageLinks.smallThumbnail}")`
                            : "",
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
