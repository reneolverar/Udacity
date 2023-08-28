import PropTypes from "prop-types"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import * as BooksAPI from "../../BooksAPI"

export default function BookDetails(props) {
    // const { book } = props
    const { slug } = useParams()

    const [book, setBook] = useState(null)

    const { id, title, authors, description, imageLinks } = book ? book : ""

    const fetchBook = async (id) => {
        try {
            const res = await BooksAPI.get(id)
            setBook(res)
        } catch (error) {
            console.error("There has been a problem with your fetch operation:", error);
            setBook(undefined)
        }

    }

    useEffect(() => {
        fetchBook(slug)
    }, [])

    return (
        <div className="book-details-container">
            <Link to="/">
                <p>Go back to main page</p>
            </Link>
            {book === null ? (
                <h2>Loading</h2>
            ) : typeof book === "undefined" ? (
                <h2>The book you've requested doesn't exist.</h2>
            ) : (
                <div>
                    <h1 className="book-details-title">{title}</h1>
                    <img
                        className="book-details-img"
                        src={imageLinks ? imageLinks.thumbnail : ""}
                        alt={"Book ID " + id}
                    ></img>
                    <h2>
                        {authors.map((author) => (
                            <span key={author}>{author}; </span>
                        ))}
                    </h2>
                    <p>{description}</p>
                </div>
            )}
        </div>
    )
}

BookDetails.propTypes = {
    // book: PropTypes.object.isRequired,
}
