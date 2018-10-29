import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import '../styles/App.scss'

import ContactPage from './ContactPage';
import ClientsPage from './ClientsPage';
import HomePage from './HomePage';
import NavItemLink from "./NavItemLink";
import ProductsPage from './ProductsPage';

class App extends Component {
    render() {
        return (
            <Router>
            <div className="App">

                <header className="App-header">
          <ul className="actions">
     {menuItems.map(props => <NavItemLink {...props} key={props.to} />)}
    </ul>
          </header>
                                        <Switch>

        <Route exact path='/' component={HomePage} />
        <Route path='/products' component={ProductsPage} />
        <Route path='/clients' component={ClientsPage} />
        <Route exact path='/contact' component={ContactPage} />
    </Switch>
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

export default App;
