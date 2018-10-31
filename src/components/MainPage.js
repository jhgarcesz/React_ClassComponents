import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import ContactPage from './ContactPage';
import ClientsPage from './ClientsPage';
import HomePage from './HomePage';
import NavItemLink from "./NavItemLink";
import ProductsPage from '../containers/ProductsPage';


const menuItems =  [{
    label: 'HOME',
    to: '/',
    exact: true
}, {
    label: 'PRODUCTS',
    to: '/products',
}, {
    label: 'CLIENTS',
    to: '/clients',
}, {
    label: 'CONTACT',
    to: '/contact',
}];

const MainPage = () => (
    <Router>
        <div>
            <header className="header">
                <ul className="header-menu">
                    {menuItems.map(props => <NavItemLink {...props} key={props.to} />)}
                </ul>
            </header>
            <Switch>
                <Route exact path={menuItems[0].to} component={HomePage} />
                <Route exact path={menuItems[1].to} component={ProductsPage} />
                <Route path={`${menuItems[1].to}/:category`} component={ProductsPage} />
                <Route path={menuItems[2].to} component={ClientsPage} />
                <Route exact path={menuItems[3].to} component={ContactPage} />
            </Switch>
        </div>
    </Router>
);

export default MainPage;
