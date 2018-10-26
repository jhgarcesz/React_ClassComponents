import React, { Component } from 'react';
import { NavigationDrawer } from 'react-md';
import logo from './logo.svg';
import './styles/App.scss'

import SimpleList from "./containers/SimpleList";
import ProductItem from "./containers/ProductItem";

class App extends Component {
  render() {
    return (
    <NavigationDrawer
        drawerTitle="react-md with CRA"
        toolbarTitle="Welcome to react-md"
    >
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload. hola2
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <section>
                <ProductItem/>
            </section>
        </div>
    </NavigationDrawer>
    );
  }
}

export default App;
