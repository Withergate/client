import React from 'react';
import PropTypes from 'prop-types';

import TooltipWrapper from '../shared/TooltipWrapper';
import { ProgressBar } from 'react-bootstrap';

const AnnotatedProgressBar = ({value, max}) => (
    <div className="mt-1 mb-1">
        <TooltipWrapper textKey={"basic.progress"} value={max ? value + "/" + max : value}>
            <ProgressBar
                min={0}
                now={value}
                max={max} />
        </TooltipWrapper>
    </div>
);

AnnotatedProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number
};

export default AnnotatedProgressBar;