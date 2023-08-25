import { useState, useCallback } from "react";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";

export default function BookSearchBox({ onSearchInputChange }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (query) => {
    setQuery(query);
    debouncedSearch(query);
  };

    const debouncedSearch = useCallback(
        debounce((query) => onSearchInputChange(query), 600),
        []
    )

  return (
    <div className="search-books-input-wrapper">
      <input
        value={query}
        onChange={(event) => handleInputChange(event.target.value)}
        type="text"
        placeholder="Search by title, author, or ISBN"
      />
    </div>
  );
}

BookSearchBox.propTypes = {
  onSearchInputChange: PropTypes.func.isRequired,
};
