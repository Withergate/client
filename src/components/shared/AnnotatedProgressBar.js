import React from 'react';
import PropTypes from 'prop-types';

import TooltipWrapper from '../shared/TooltipWrapper';
import { ProgressBar, Row, Col } from 'react-bootstrap';
import { Translate } from 'react-localize-redux';

const AnnotatedProgressBar = ({value, max}) => (
    <Row>
        <Col md={3} xs={5}><b><Translate id="basic.progress" />: </b>{max ? value + " / " + max : value}</Col>
        <Col md={9} xs={7} className="pt-1">
            <TooltipWrapper textKey={"basic.progress"} value={max ? value + "/" + max : value}>
                <ProgressBar
                    min={0}
                    now={value}
                    max={max} />
            </TooltipWrapper>
        </Col>
    </Row>
);

AnnotatedProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number
};

export default AnnotatedProgressBar;