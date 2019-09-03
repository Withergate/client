import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-localize-redux';

import TooltipWrapper from '../shared/TooltipWrapper';
import { Row, Col, ProgressBar } from 'react-bootstrap';
import { MAX_ATTRIBUTE } from '../../constants/constants';

const AttributeBar = ({name, value, hideText}) => (
    <Row>
        {   
            !hideText &&
            <Col><Translate id={name} /></Col>
        }
        <Col className="mb-1">
            <TooltipWrapper textKey={name} value={value}>
                <ProgressBar
                    variant="warning"
                    now={value}
                    max={MAX_ATTRIBUTE} />
            </TooltipWrapper>
        </Col>
    </Row>
);

AttributeBar.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    hideText: PropTypes.bool
};

export default AttributeBar;