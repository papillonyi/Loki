import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as Status from '../status.js';
import {fetchRate} from "../actions";


class Asset extends Component {
    // constructor(props, context) {
    //     super(props, context);
    // }

    componentDidMount() {
        this.props.fetchData(this.props.id, this.props.scur, this.props.tcur)
    }

    render() {
        switch (this.props.status) {
            case Status.LOADING: {
                return <div>信息请求中...</div>;
            }
            case Status.SUCCESS: {
                return (
                    <div>
                        {this.props.children}  rate: {this.props.rate}
                    </div>
                )
            }
            case Status.FAILURE: {
                return <div>信息装载失败</div>
            }
            default: {
                throw new Error('unexpected status ' + this.props.status);
            }
        }
    }

}

Asset.propTypes = {
    status: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    id: PropTypes.number,
    scur: PropTypes.number,
    tcur: PropTypes.number,
    rate: PropTypes.number,
    fetchData: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (id, scur, tcur) => {
            dispatch(fetchRate(id, scur, tcur));
        }
    }
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.id;
    const info = state.totalAsset[id] || {status: Status.LOADING, rate: 0};
    return {rate: info.rate, status: info.status}
};

export default connect(mapStateToProps, mapDispatchToProps)(Asset);
