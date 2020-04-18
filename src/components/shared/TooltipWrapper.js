import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import ReactTooltip from 'react-tooltip';

const generateId = (key, value, place) => {
    var id = key;
    if (value) {
        id += value;
    }
    if (place) {
        id += place;
    }
    return id;
}

const TooltipWrapper = (props) => (
    <div>
        <div data-tip data-for={generateId(props.textKey, props.value, props.place)}>
            { props.children }
        </div>
        <ReactTooltip id={generateId(props.textKey, props.value, props.place)} effect="solid" className="tooltip-multiline" place={props.place}>
            <Translate id={props.textKey} />
            { props.value && <span>: {props.value}</span> }
        </ReactTooltip>
    </div>
);

TooltipWrapper.propTypes = {
    textKey: PropTypes.string.isRequired,
    value: PropTypes.any,
    place: PropTypes.string
};

export default TooltipWrapper;