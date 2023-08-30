import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import BookShelf from "./BookShelf"

export default function BookShelfs(props) {
    const { books, onShelfChange, onRatingChange } = props

    const shelfs = [
        {
            name: "Currently reading",
            id: "currentlyReading",
        },
        {
            name: "Want to Read",
            id: "wantToRead",
        },
        {
            name: "Read",
            id: "read",
        },
    ]

    return (
        <div className="list-books">
            <div className="list-books-content">
                <p className="centered">
                    The books shown can be moved between shelfs by clicking on
                    the green button, by drag and drop or selecting multiple
                    elements at once.
                    <br/>
                    To see more details of the book, click on the book cover.
                </p>
                <div>
                    {books &&
                        shelfs.map((shelf) => (
                            <BookShelf
                                key={shelf.id}
                                shelf={shelf}
                                books={books.filter(
                                    (book) => book.shelf === shelf.id
                                )}
                                onShelfChange={onShelfChange}
                                onRatingChange={onRatingChange}
                            />
                        ))}
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    )
}

BookShelfs.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
}
