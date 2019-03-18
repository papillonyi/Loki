import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import {view as TotalAsset} from './total_asset/';

import ButtonAppBar from './components/buttonAppBar';


class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/login" component={Login} />
                </div>
            </Router>
        );
    }
}

function Home() {
    return (
        <div>
            <ButtonAppBar/>
            <TotalAsset/>
        </div>
    )
}

function Login() {
    return (
        <div>
            <ButtonAppBar/>
        </div>
    )
}


export default App;
