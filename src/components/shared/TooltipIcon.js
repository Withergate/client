import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import ReactTooltip from 'react-tooltip';

const TooltipIcon = (props) => (
    <div className="ml-1">
        <div data-tip data-for={props.textKey}>
            { props.children }
        </div>
        <ReactTooltip id={props.textKey} effect="solid" place="left">
            <Translate id={props.textKey} />
        </ReactTooltip>
    </div>
);

TooltipIcon.propTypes = {
    textKey: PropTypes.string.isRequired
};

export { TooltipIcon };