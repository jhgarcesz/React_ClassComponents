import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import ContactPage from './ContactPage';
import ClientsPage from './ClientsPage';
import HomePage from './HomePage';
import NavItemLink from "./NavItemLink";
import ProductsPage from '../containers/ProductsPage';

class MainPage extends Component {
    render() {
        return (
            <Router>
                <div>
                    <header className="app-header">
                        <ul className="header-menu">
                            {menuItems.map(props => <NavItemLink {...props} key={props.to} />)}
                        </ul>
                    </header>
                    <body>
                        <Switch>
                                <Route exact path='/' component={HomePage} />
                                <Route path='/products' component={ProductsPage} />
                                <Route path='/clients' component={ClientsPage} />
                                <Route exact path='/contact' component={ContactPage} />
                        </Switch>
                    </body>
                </div>
            </Router>
        );
    }
}

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

export default MainPage;
