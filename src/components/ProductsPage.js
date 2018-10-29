import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationDrawer } from 'react-md';

import NavItemLink from "./NavItemLink";
import ProductList  from './ProductList'

const TO_PREFIX = '/products';

const navItems =  [{
    label: 'All',
    to: TO_PREFIX,
    icon: 'inbox',
    exact: true
}, {
    label: 'Tech',
    to: `${TO_PREFIX}/tech`,
    icon: 'star',
}, {
    label: 'Services',
    to: `${TO_PREFIX}/services`,
    icon: 'send',
}, {
  label: 'Office',
  to: `${TO_PREFIX}/office`,
  icon: 'drafts',
}];

const ProductsPage = ({ items, match }) => (
    <Router>
        <div className="product_page">
            <Switch>
                <NavigationDrawer
                    drawerTitle="Categories"
                    navItems={navItems.map(props => <NavItemLink {...props} key={props.to} />)}
                    contentClassName="md-grid"
                            contentId="main-demo-content"

                >
                    <Route path={navItems[0].to} exact component={ProductList} />
                    <Route path="/products/:id" component={ProductList} />
                </NavigationDrawer>
            </Switch>
                <ProductList products= { items } />
        </div>
    </Router>
);

ProductsPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

ProductsPage.defaultProps = {
  items: []
};

export default ProductsPage;
