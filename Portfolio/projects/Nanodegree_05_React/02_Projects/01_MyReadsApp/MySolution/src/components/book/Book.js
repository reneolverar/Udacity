import { useNavigate } from "react-router-dom"
import { Draggable } from "@hello-pangea/dnd"
import PropTypes from "prop-types"
import ShelfChanger from "./ShelfChanger"
import Rating from "./Rating"

export default function Book(props) {
    let navigate = useNavigate()

    const { index, book, onShelfChange, isDragDisabled } = props
    const { title, authors, imageLinks } = book

    const backgroundImage = imageLinks ? imageLinks.smallThumbnail : ""

    const handleClick = (e) => {
        navigate("/bookId/" + book.id)
    }

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
                >
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{
                                backgroundImage: `url("${backgroundImage}")`,
                            }}
                        ></div>
                    <ShelfChanger
                        book={props.book}
                        onShelfChange={onShelfChange}
                    />
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors}</div>
                    <Rating
                        book={props.book}
                    />
                </div>
            )}
        </Draggable>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired,
}
