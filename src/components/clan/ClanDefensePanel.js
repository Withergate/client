import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { Card, ListGroup } from 'react-bootstrap';
import { COMBAT, HEALTH, ARMOR, LARGE } from '../../constants/constants';
import { GameIcon } from '../shared/GameIcon';

const ClanDefensePanel = ({defender}) => (
    <Card className="mt-4">
        <Card.Body>
            <Card.Title>
            <Translate id="labels.clanDefense" />
            </Card.Title>
            <p><Translate id="labels.clanDefenseInfo1" /></p>
            <p><Translate id="labels.clanDefenseInfo2" /></p>

            <ListGroup horizontal>
                <ListGroup.Item><GameIcon type={COMBAT} size={LARGE} value={defender.combat} /></ListGroup.Item>
                <ListGroup.Item><GameIcon type={ARMOR} size={LARGE} value={defender.outfit.details.combat} /></ListGroup.Item>
                <ListGroup.Item><GameIcon type={HEALTH} size={LARGE} value={defender.hitpoints} /></ListGroup.Item>
            </ListGroup>
        </Card.Body>
    </Card>
);

ClanDefensePanel.propTypes = {
    defender: PropTypes.object.isRequired
};

export default ClanDefensePanel;