import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ScurTable from './scurTable.js';
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

        return this.props.typeInfo.map((v, i) => <ScurTable scur={v.ID} key={i}/>)
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