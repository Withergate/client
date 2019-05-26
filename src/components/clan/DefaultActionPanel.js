import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { Row, Col, Card, Form } from 'react-bootstrap';
import { REST, EXPLORE_NEIGHBORHOOD } from '../../constants/constants';

const DefaultActionPanel = ({clan, changeDefaultAction}) => (
    <Card className="mt-4">
        <Card.Body>
            <Row>
                <Col>
                    <Translate id="labels.defaultAction" />
                </Col>
            </Row>
            <Row className="mt-2">
                <Col md={4}>
                    <Translate>
                        {({ translate }) =>
                            <Form.Control as="select" value={clan.defaultAction} onChange={(e) => changeDefaultAction(e.target.value)}>
                                <option value={REST}>{translate(REST)}</option>
                                <option value ={EXPLORE_NEIGHBORHOOD}>{translate(EXPLORE_NEIGHBORHOOD)}</option>
                            </Form.Control>
                        }
                    </Translate>
                </Col>
            </Row>
        </Card.Body>
    </Card>
);

DefaultActionPanel.propTypes = {
    clan: PropTypes.object.isRequired,
    changeDefaultAction: PropTypes.func.isRequired
};

export default DefaultActionPanel;