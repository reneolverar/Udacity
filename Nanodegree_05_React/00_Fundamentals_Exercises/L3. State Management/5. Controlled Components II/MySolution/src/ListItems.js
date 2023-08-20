import { PropTypes } from "prop-types"

const ListItems = ({ items }) => {

    return (
        <div>
            <p className="items">Items</p>
            <ol className="item-list">
                {items.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ol>
        </div>
    )
}

ListItems.propTypes = {
    items: PropTypes.array.isRequired,
};

export default ListItems;