import React from 'react';
import PropTypes from 'prop-types';

import { ListGroup } from 'react-bootstrap';
import { COMBAT, LARGE, ARMOR, HEALTH } from '../../constants/constants';
import { GameIcon } from '../shared/GameIcon';

const DefenderDetail= ({defender}) => (
    <ListGroup horizontal>
        <ListGroup.Item><GameIcon type={COMBAT} size={LARGE} value={defender.combat} /></ListGroup.Item>
        <ListGroup.Item><GameIcon type={ARMOR} size={LARGE} value={defender.outfit.details.combat} /></ListGroup.Item>
        <ListGroup.Item><GameIcon type={HEALTH} size={LARGE} value={defender.hitpoints} /></ListGroup.Item>
    </ListGroup>
);

DefenderDetail.propTypes = {
    defender: PropTypes.object.isRequired
};

export default DefenderDetail;