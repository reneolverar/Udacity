import { useNavigate } from "react-router-dom"
import { Draggable } from "@hello-pangea/dnd"
import PropTypes from "prop-types"
import ShelfChanger from "./ShelfChanger"
import Rating from "./Rating"
import { useState } from "react"

export default function Book(props) {
    let navigate = useNavigate()

    const {
        index,
        book,
        onShelfChange,
        isDragDisabled,
        bookSelected = false,
        onSelectBook,
        showSelection = false,
    } = props

    const { title, authors, imageLinks, shelf: shelfId } = book

    const backgroundImage = imageLinks ? imageLinks.smallThumbnail : ""

    const handleClick = (e) => {
        navigate("/bookId/" + book.id)
    }

    const [showBookSelector, setShowBookSelector] = useState(false)

    return (
        <Draggable
            draggableId={book.id}
            index={index}
            isDragDisabled={isDragDisabled}
        >
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    snapshot={snapshot}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="book"
                    onClick={handleClick}
                    onMouseEnter={() => setShowBookSelector(true)}
                    onMouseLeave={() => setShowBookSelector(false)}
                >
                    <div className="book-top">
                        <div
                            className={
                                showBookSelector || showSelection
                                    ? ["book-bulk-selector", bookSelected].join(
                                          " "
                                      )
                                    : ""
                            }
                            onClick={(e) => {
                                e.stopPropagation()
                                onSelectBook(book)
                            }}
                        ></div>
                        <div
                            className="book-cover"
                            style={{
                                width: "128px",
                                height: "193px",
                                backgroundImage: `url("${backgroundImage}")`,
                            }}
                        ></div>
                        <ShelfChanger
                            shelfId={shelfId}
                            onShelfChange={(shelfId) =>
                                onShelfChange(book, shelfId)
                            }
                        />
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors}</div>
                    <Rating book={book} />
                </div>
            )}
        </Draggable>
    )
}

Book.propTypes = {
    index: PropTypes.number.isRequired,
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired,
    isDragDisabled: PropTypes.bool.isRequired,
    onSelectBook: PropTypes.func.isRequired,
}
