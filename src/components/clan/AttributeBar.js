import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import star from '../../images/round-star.png';

function renderBar(value) {
    var stars = [];
    for (var i = 0; i < value; i++) {
        stars.push(<span key={i}><img className="m-1" height="15" src={star} alt="*" /></span>);
    }
    return stars;
}


const AttributeBar = ({name, value}) => (
    <div className="row">
        <div className="col"><Translate id={name} /></div>
        <div className="col">{renderBar(value)}</div>
    </div>
);

AttributeBar.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
};

export { AttributeBar };