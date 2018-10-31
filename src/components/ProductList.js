import React from "react";
import PropTypes from "prop-types";

import ProductItem  from "./ProductItem";

import { List } from 'react-md';

const ProductList = ({ filteredProducts, category, products }) => (
    <div className="product_list">
        {displayCounter(category, products, filteredProducts)}
        <List className="md-list-unstyled md-grid">
            {filteredProducts.map(product => (
                <ProductItem detail= { product }  key= { product.id } />
            ))}
        </List>
    </div>
);

const displayCounter = (category, products, filteredProducts) => {
    if (category && products.length) {
        return (
            <div className="product_list-counter">
                <p> Showing
                    <strong> {filteredProducts.length} </strong>
                    products - Hidden:
                    <strong> {products.length - filteredProducts.length} </strong>
                </p>
            </div>
        );
    }
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    filteredProducts: PropTypes.arrayOf(PropTypes.object),
    category: PropTypes.string
};

ProductList.defaultProps = {
    products: [],
    filteredProducts: [],
    category: ''
};

export default ProductList;
