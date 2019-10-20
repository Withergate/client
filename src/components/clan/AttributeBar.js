import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-localize-redux';

import TooltipWrapper from '../shared/TooltipWrapper';
import { Row, Col, ProgressBar } from 'react-bootstrap';
import { MAX_ATTRIBUTE, SMALL } from '../../constants/constants';
import { GameIcon } from '../shared/GameIcon';

const AttributeBar = ({name, value, hideText, iconType}) => (
    <Row>
        {   
            !hideText &&
            <Col><Translate id={name} /></Col>
        }
        <Col className="mb-1">
            <Row>
                <Col md={2}><GameIcon type={iconType} size={SMALL} /></Col>
                <Col className="mt-1">
                    <TooltipWrapper textKey={name} value={value}>
                        <ProgressBar
                            variant="warning"
                            now={value}
                            max={MAX_ATTRIBUTE} />
                    </TooltipWrapper>
                </Col>
            </Row>
        </Col>
    </Row>
);

AttributeBar.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    hideText: PropTypes.bool,
    iconType: PropTypes.string.isRequired
};

export default AttributeBar;