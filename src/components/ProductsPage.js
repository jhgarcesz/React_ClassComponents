import React from "react";
import PropTypes from "prop-types";
import { Route } from 'react-router-dom';
import { Drawer, Toolbar } from 'react-md';

import NavItemLink from "./NavItemLink";
import ProductList  from '../containers/ProductList'

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

const ProductsPage = ({ items }) => (
    <div className="product_page">
        <Drawer
            header={<Toolbar title={"Categories"} />}
            navItems={navItems.map(props => <NavItemLink {...props} key={props.to} />)}
        >
        </Drawer>
        <Route exact path={TO_PREFIX} component={ProductList} />
        <Route path={`${TO_PREFIX}/:category`} component={ProductList} />
    </div>
);

function Child({ match }) {
  return (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  );
}

ProductsPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

ProductsPage.defaultProps = {
  items: []
};

export default ProductsPage;
