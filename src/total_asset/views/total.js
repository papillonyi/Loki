import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Asset from './asset.js';
import * as Status from "../status";
import {connect} from 'react-redux';
import {fetchRate} from "../actions";

class Total extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="Total">
                <Asset id={1} tcur={15} scur={16}> adfasf </Asset>
            </div>
        );
    }
}

Total.prototype ={
    children: PropTypes.node.isRequired,
};

const mapStateToProps = (state) => {
    console.log(state)
    return {rateInfo: state.totalAsset}
};

const mapDispatchToProps = (dispatch) => {
    return {
        initTypeData: (id, scur, tcur) => {
            dispatch(fetchRate(id, scur, tcur));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Total);
