import PropTypes from "prop-types"
import { useEffect, useState } from "react"

export default function Rating(props) {
    const normalizeArray = (idName, array) =>
        array.length > 0 && array.map((a) => ({ [a[idName]]: a }))
    const denormalizeArray = (idName, array) =>
        array.length > 0 && array.map((a) => a[Object.keys(a)[0]])

    const { book } = props
    const storedRatings = localStorage.ratings
        ? JSON.parse(localStorage.ratings)
        : {}
    const storedRating =
        storedRatings.find((x) => x.id === book.id) &&
        storedRatings.find((x) => x.id === book.id).rating
    const [showRating, setShowRating] = useState(storedRating)
    const [tempRating, setTempRating] = useState(storedRating)
    const [ratingDisplay, setRatingDisplay] = useState([])

    useEffect(() => {
        createRating(tempRating)
    }, [tempRating])

    const handleClick = (e) => {
        console.log(e.target.id)
        e.stopPropagation()
        let newRating = storedRatings.length > 0 ? [...storedRatings] : []
        newRating.push({ id: book.id, rating: e.target.id })
        localStorage.setItem("ratings", JSON.stringify(newRating))
        setShowRating(e.target.id)
    }

    const createRating = (rating) => {
        if (typeof rating === "undefined") {
            rating = 0
        }
        let newRatingDisplay = []
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                newRatingDisplay[i] = "★"
            } else {
                newRatingDisplay[i] = "☆"
            }
        }
        setRatingDisplay(newRatingDisplay)
    }

    return (
        <div
            className="rating"
            onClick={(e) => handleClick(e)}
        >
            {showRating ? (
                ratingDisplay.map((star, index) => (
                    <span
                        key={index}
                        id={index}
                        onMouseEnter={() => setTempRating(index)}
                        onMouseLeave={() => setTempRating(showRating)}
                    >
                        {star}
                    </span>
                ))
            ) : (
                <button
                    onClick={(e) => {
                        setShowRating(true)
                        e.stopPropagation()
                    }}
                >
                    Click to rate
                </button>
            )}
        </div>
    )
}

Rating.propTypes = {
    book: PropTypes.object.isRequired
}
