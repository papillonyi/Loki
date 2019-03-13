import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Asset from './asset.js';

function ScurTable({scur, typeInfo}) {
    const tcurs = typeInfo.filter(x => x.ID !== scur);
    const context = tcurs.map((v,i) => <Asset scur={scur} tcur={v.ID} key={i}/>)
    return (
        <div style={{display: 'inline-block'}}>
            {context}
        </div>
    )
}

ScurTable.propTypes = {
    scur: PropTypes.number,
    typeInfo: PropTypes.array,
};

const mapStateToProps = (state) => {
    return {typeInfo: state.totalAsset.types}
};

export default connect(mapStateToProps)(ScurTable);