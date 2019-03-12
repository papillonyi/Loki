import React, { Component } from 'react';

import {view as TotalAsset} from './total_asset/';

import ButtonAppBar from './components/buttonAppBar';


class App extends Component {

    render() {
        return (

            <div>
                <ButtonAppBar/>
                <TotalAsset/>
            </div>
        );
    }
}

export default App;
