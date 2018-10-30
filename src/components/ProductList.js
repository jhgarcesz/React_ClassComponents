import React from "react";
import PropTypes from "prop-types";

import ProductItem  from "./ProductItem";

import { List } from 'react-md';

const ProductList = ({ products }) => (
    <List className="md-list-unstyled md-grid">
        {products.map(product => (
            <ProductItem detail= { product }  key= { product.id } />
        ))}
    </List>
);

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object)
};

ProductList.defaultProps = {
    products: []
};

export default ProductList;
