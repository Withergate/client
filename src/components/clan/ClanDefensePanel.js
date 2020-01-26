import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { Card, Row, Col } from 'react-bootstrap';
import { COMBAT, HEALTH, ARMOR } from '../../constants/constants';
import AttributeBar from './AttributeBar';

const ClanDefensePanel = ({defender}) => (
    <Card className="mt-4">
        <Card.Body>
            <Card.Title>
            <Translate id="labels.clanDefense" />
            </Card.Title>
            <Row>
                <Col>
                    <Translate id="labels.clanDefenseInfo" />
                </Col>
                <Col>
                    <AttributeBar name="basic.combat" value={defender.combat} iconType={COMBAT} max={12} />
                    <AttributeBar name="basic.armor" value={defender.outfit.details.combat} iconType={ARMOR} max={3} />
                    <AttributeBar name="basic.health" value={defender.hitpoints} iconType={HEALTH} max={35} variant="success" />
                </Col>
            </Row>
            
        </Card.Body>
    </Card>
);

ClanDefensePanel.propTypes = {
    defender: PropTypes.object.isRequired
};

export default ClanDefensePanel;