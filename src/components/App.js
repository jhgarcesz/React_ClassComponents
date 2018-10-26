import React, { Component } from 'react';
import { NavigationDrawer } from 'react-md';
import '../styles/App.scss'

import ProductPage from "../containers/ProductPage";

class App extends Component {
    render() {
        return (
            <NavigationDrawer
                drawerTitle="react-md with CRA"
                toolbarTitle="Welcome to react-md"
            >
            <div className="App">
                <header className="App-header">
                    <ProductPage/>
                </header>
            </div>
            </NavigationDrawer>
        );
    }
}

export default App;
