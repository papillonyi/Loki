import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import * as Status from '../status.js';
import {fetchRate} from "../actions";

import RateCard from '../../components/rateCard'


class Asset extends Component {

    componentDidMount() {
        this.props.fetchData(this.props.scur, this.props.tcur)
    }



    render() {
        const scurrency = this.props.typeInfo.find(x => x.ID === this.props.scur);
        const tcurrency = this.props.typeInfo.find(x => x.ID === this.props.tcur);


        return (
            <RateCard rate={this.props.rate} tscur={`${scurrency['CurrencyName']} => ${tcurrency['CurrencyName']}`}/>
        )
    }

}

Asset.propTypes = {
    typeInfo: PropTypes.array,
    scur: PropTypes.number,
    tcur: PropTypes.number,
    rate: PropTypes.number,
    fetchData: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (scur, tcur) => {
            dispatch(fetchRate(scur, tcur));
        }
    }
};

const mapStateToProps = (state, ownProps) => {
    let rate = 0;
    try {
        rate = state.totalAsset[ownProps.scur][ownProps.tcur];

    }
    catch(error) {
    }
    console.log(state.totalAsset.types);
    return {typeInfo: state.totalAsset.types, rate: rate}
};

export default connect(mapStateToProps, mapDispatchToProps)(Asset);
