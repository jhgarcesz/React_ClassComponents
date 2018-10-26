import React from "react";
import PropTypes from "prop-types";

import ProductList  from './ProductList'

const ProductPage = ({ items }) => (
    <div className="product_page">
        <ProductList products= { items } />
    </div>
);

ProductPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

ProductPage.defaultProps = {
  items: []
};

export default ProductPage;
