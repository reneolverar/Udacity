import PropTypes from 'prop-types'

const options = [
    { value: "none", disabled: true, text: "Move to..." },
    { value: "currentlyReading", text: "Currently Reading" },
    { value: "wantToRead", text: "Want to Read" },
    { value: "read", text: "Read"},
    { value: "none", text: "None" },
]

function Option({value, text, shelf, disabled=false}) {
  return (
    <option value={value} disabled={disabled}>{shelf === value && "✔"} { text }</option>
  )
}

function ShelfChanger(props) {
    const { book, onShelfChange } = props
    const { shelf } = book

    const handleChange = (e) => {
        onShelfChange(book, e.target.value)
    }

  return (
    <div className="book-shelf-changer">
      <select value={shelf} onChange={handleChange}>
          {options.map(
            (option, i) =>
              <Option
                key={i}
                {...option}
                shelf={shelf}
              />
          )}
        </select>
    </div>
  )
}

ShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func.isRequired,
}

export default ShelfChanger
