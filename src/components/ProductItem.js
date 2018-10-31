import React from "react";
import PropTypes from "prop-types";

const ProductItem = ({ detail }) => (
    <div className="md-divider-border md-divider-border--top md-divider-border--right md-divider-border--bottom md-divider-border--left product_item" >
        <div className="product_item_title">
            <h3> {detail.name} </h3>
            <h6 className="product_item_category"> {detail.categories.join(', ')} - {detail.brand} </h6>
        </div>
        <div className="product_item_container">
            <figure className="product_item_figure">
                <img src={detail.photo} alt=""  className="product_item_photo" />
            </figure>
            <div className="product_item_description">
                <p>{detail.description}</p>
                <strong>Stock: </strong><p>{detail.stock}</p>
                <strong>Price: </strong><p>${detail.price}</p>
            </div>
         </div>
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
