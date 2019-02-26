import React, { Component } from 'react';

// import {view as CitySelector} from './input_area/';
// import {view as Weather} from './detail_area/';
import {view as Weather} from './total_asset/';


class App extends Component {
    render() {
        return (
            <div>
            <CitySelector />
            <Weather />
            </div>
    );
    }
}

export default App;
