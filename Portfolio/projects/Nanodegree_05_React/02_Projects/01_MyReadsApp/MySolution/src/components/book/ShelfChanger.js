import PropTypes from "prop-types"

const options = [
    { value: "moveTo", text: "Move to...", disabled: true },
    { value: "", text: "", hidden: true },
    { value: "currentlyReading", text: "Currently Reading" },
    { value: "wantToRead", text: "Want to Read" },
    { value: "read", text: "Read" },
    { value: "none", text: "None" },
]

function Option({ value, text, shelfId, disabled = false, hidden = false }) {
    return (
        <option
            value={value}
            disabled={disabled}
            hidden={hidden}
        >
            {shelfId === value && "✔"} {text}
        </option>
    )
}

export default function ShelfChanger(props) {
    const { shelfId, onShelfChange } = props

    const bookShelf =
        typeof shelfId === "undefined"
            ? "none"
            : shelfId === "bulkSelect"
            ? ""
            : shelfId

    const handleChange = (e) => {
        onShelfChange(e.target.value)
    }

    return (
        <div className="book-shelf-changer">
            <select
                className="book-shelf-changer-select"
                onClick={(e) => e.stopPropagation()}
                value={bookShelf}
                onChange={handleChange}
            >
                {options.map((option, i) => (
                    <Option
                        key={i}
                        {...option}
                        shelfId={bookShelf}
                    />
                ))}
            </select>
        </div>
    )
}

ShelfChanger.propTypes = {
    onShelfChange: PropTypes.func.isRequired,
}
