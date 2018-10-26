import React from "react";
import PropTypes from "prop-types";

const Product = ({ detail }) => (
    <li key={detail.id} className="my-app__simple-list-item">
        <div>
            <h3>{detail.name}</h3>
            {detail.categories.map(category =>(
              <small>{category}, </small>
            ))}
            <small>- {detail.brand}</small>
            <img src={detail.photo} alt="" />
            <p>{detail.description}</p>
            <strong>Stock: </strong><p>{detail.stock}</p>
            <strong>Price: </strong><p>{detail.price}</p>
        </div>
    </li>
);

Product.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired
};

Product.defaultProps = {};

export default Product;
