import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import ReactTooltip from 'react-tooltip';

const generateId = (key, value) => {
    return key + value;
}

const TooltipWrapper = (props) => (
    <div>
        <div data-tip data-for={generateId(props.textKey, props.value)}>
            { props.children }
        </div>
        <ReactTooltip id={generateId(props.textKey, props.value)} effect="solid" place="left">
            <Translate id={props.textKey} />
            { props.value && <span>: {props.value}</span> }
        </ReactTooltip>
    </div>
);

TooltipWrapper.propTypes = {
    textKey: PropTypes.string.isRequired,
    value: PropTypes.any
};

export default TooltipWrapper;