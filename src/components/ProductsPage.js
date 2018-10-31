import React from "react";
import PropTypes from "prop-types";
import { Drawer, Toolbar } from 'react-md';

import NavItemLink from "./NavItemLink";
import ProductList  from './ProductList'

const TO_PREFIX = '/products';

const navItems =  [{
    label: 'All',
    to: TO_PREFIX,
    icon: 'menu',
    exact: true
}, {
    label: 'Tech',
    to: `${TO_PREFIX}/tech`,
    icon: 'computer',
}, {
    label: 'Services',
    to: `${TO_PREFIX}/services`,
    icon: 'build',
}, {
    label: 'Office',
    to: `${TO_PREFIX}/office`,
    icon: 'folder',
}];

const ProductsPage = ({ items, category }) => (
    <div className="product_page">
        <Drawer
            header={<Toolbar title={"Categories"} />}
            navItems={navItems.map(props => <NavItemLink {...props} key={props.to} />)}
        >
        </Drawer>
        <ProductList filteredProducts={filterProducts(items, category)} category={category} products={items} />
    </div>
);

const filterProducts = (products, category) => {
    if (!category) {
        return products;
    }

    const capitalizedCategory = category.replace(/\b\w/g, l => l.toUpperCase());
    return products.filter(p => p.categories.includes(capitalizedCategory));
};

ProductsPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

ProductsPage.defaultProps = {
  items: []
};

export default ProductsPage;
