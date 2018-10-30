import React from "react";
import PropTypes from "prop-types";

import { Avatar, IconSeparator } from 'react-md';

const ProductItem = ({ detail }) => (
    <div className="md-divider-border md-divider-border--top md-divider-border--right md-divider-border--bottom md-divider-border--left" >
        <IconSeparator label={detail.name} iconBefore component="li" className="md-cell md-cell--12 product_name">
            <Avatar src={detail.photo} role="presentation" />
            <small>{detail.categories.join(', ')} - {detail.brand} </small>
            <div>
                <p>{detail.description}</p>
                <strong>Stock: </strong><p>{detail.stock}</p>
                <strong>Price: </strong><p>{detail.price}</p>
            </div>
        </IconSeparator>
    </div>
);

ProductItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    brand: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    photo: PropTypes.string,
    price: PropTypes.string,
    stock: PropTypes.number
};

ProductItem.defaultProps = {};

export default ProductItem;
