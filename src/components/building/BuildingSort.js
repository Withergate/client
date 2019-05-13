import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form } from 'react-bootstrap';
import { Translate } from "react-localize-redux";

const BuildingSort = ({sort, sortKeyAction, sortDirectionAction}) => (
    <Form.Group>
        <Row>
            <Col md={2}>
                <Form.Label ><Translate id="labels.sortKey" /></Form.Label>
            </Col>
            <Col md={2}>
                <Translate>
                {({ translate }) =>
                    <Form.Control as="select" value={sort.key} onChange={(e) => sortKeyAction(e.target.value)}>
                        <option value="level">{translate("basic.level")}</option>
                        <option value ="progress">{translate("basic.progress")}</option>
                    </Form.Control>
                }
                </Translate>
            </Col>
            <Col md={2}>
                <Translate>
                {({ translate }) =>
                    <Form.Control as="select" value={sort.direction} onChange={(e) => sortDirectionAction(e.target.value)}>
                        <option value="asc">{translate("labels.asc")}</option>
                        <option value ="desc">{translate("labels.desc")}</option>
                    </Form.Control>
                }
                </Translate>
            </Col>
        </Row>
    </Form.Group>
);

BuildingSort.propTypes = {
    sort: PropTypes.object.isRequired,
    sortKeyAction: PropTypes.func.isRequired,
    sortDirectionAction: PropTypes.func.isRequired
};

export default BuildingSort;