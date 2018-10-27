import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationDrawer } from 'react-md';
import '../styles/App.scss'

import ProductPage from "../containers/ProductPage";
import NavItemLink from "./NavItemLink";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Router>
                        <NavigationDrawer
                            drawerTitle="Categories"
                            navItems={navItems.map(props => <NavItemLink {...props} key={props.to} />)}
                        >
                        <Switch>
                            <Route path={navItems[0].to} exact component={ProductPage} />
                            <Route path={navItems[1].to} component={ProductPage} />
                            <Route path={navItems[2].to} component={ProductPage} />
                            <Route path={navItems[3].to} component={ProductPage} />
                        </Switch>
                        </NavigationDrawer>
                    </Router>
                </header>
            </div>
        );
    }
}

const TO_PREFIX = '/products';

const navItems =  [{
    label: 'All',
    to: TO_PREFIX,
    exact: true,
    icon: 'inbox',
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

export default App;
