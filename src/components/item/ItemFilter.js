import React from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col } from 'react-bootstrap';
import { Translate } from "react-localize-redux";

import { ALL, WEAPON, OUTFIT, GEAR, CONSUMABLE } from '../../constants/constants';

const ItemFilter = (props) => (
    <Form.Group>
        <Row>
            <Col md={3}>
                <Form.Label ><small><Translate id="labels.filter" /></small></Form.Label>
            </Col>
            <Col md={9}>
                <Translate>
                    {({ translate }) =>
                        <Form.Control as="select" value={props.filter} onChange={(e) => props.onChange(e.target.value)}>
                            <option value={ALL}>{translate("basic.all")}</option>
                            <option value ={WEAPON}>{translate("basic.weapon")}</option>
                            <option value ={OUTFIT}>{translate("basic.outfit")}</option>
                            <option value ={GEAR}>{translate("basic.gear")}</option>
                            <option value ={CONSUMABLE}>{translate("basic.consumable")}</option>
                        </Form.Control>
                    }
                </Translate>
            </Col>
        </Row>
    </Form.Group>
);

ItemFilter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default ItemFilter;