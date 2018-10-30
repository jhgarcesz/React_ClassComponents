import React, { Component } from 'react';

import '../styles/App.scss'

import MainPage from './MainPage';

class App extends Component {
    render() {
        return (
            <div className="app">
                <MainPage />
            </div>
        );
    }
}

export default App;
