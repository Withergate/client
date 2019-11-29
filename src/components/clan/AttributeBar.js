import React from 'react';
import PropTypes from 'prop-types';

import TooltipWrapper from '../shared/TooltipWrapper';
import { Row, Col, ProgressBar } from 'react-bootstrap';
import { MAX_ATTRIBUTE, SMALL } from '../../constants/constants';
import { GameIcon } from '../shared/GameIcon';

const AttributeBar = ({name, value, iconType, max, variant}) => (
    <Row className="mt-1 mb-1">
        <Col xs={1}><GameIcon type={iconType} size={SMALL} noPadding /></Col>
        <Col xs={10} className="mt-1">
            <TooltipWrapper textKey={name} value={max ? value + "/" + max : value}>
                <ProgressBar
                    variant={variant ? variant : "warning"}
                    now={value}
                    max={max ? max : MAX_ATTRIBUTE} />
            </TooltipWrapper>
        </Col>
    </Row>
);

AttributeBar.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    iconType: PropTypes.string.isRequired,
    max: PropTypes.number,
    variant: PropTypes.string
};

export default AttributeBar;