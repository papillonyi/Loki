import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Asset from './asset.js';
import {connect} from 'react-redux';
import {fetchType} from "../actions";

class Total extends Component {
    // constructor(props, context) {
    //     super(props, context);
    // }

    componentDidMount() {
        this.props.initTypeData()
    }

    render() {
        let i = 0;
        let types = [];
        for (let index in this.props.typeInfo) {
            for (let index2 in this.props.typeInfo)
                if (index !== index2) {
                    let key = i++;
                    types.push(<Asset key={key} id={key} tcur={this.props.typeInfo[index2].ID}
                                      scur={this.props.typeInfo[index].ID}>{this.props.typeInfo[index].CurrencyName} => {this.props.typeInfo[index2].CurrencyName}  </Asset>)
                }
        }
        return (
            <div>
                {types}
            </div>
        );
    }
}

Total.propTypes ={
    initTypeData: PropTypes.func,
    typeInfo: PropTypes.array,
};

const mapStateToProps = (state) => {
    return {typeInfo: state.totalAsset.types}
};

const mapDispatchToProps = (dispatch) => {
    return {
        initTypeData: () => {
            dispatch(fetchType());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Total);
// export default Total;