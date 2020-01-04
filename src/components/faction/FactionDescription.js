import React from 'react';
import PropTypes from 'prop-types';

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Card, Image } from 'react-bootstrap';
import { GameIcon } from '../shared/GameIcon';
import { FACTION_POINTS, LARGE } from '../../constants/constants';
import { Translate } from 'react-localize-redux';

const FactionDescription = ({faction}) => (
    <Card.Body>
        <Card.Title>
             <ul className="list-inline">
                <li className="list-inline-item">
                    <Image src={faction.iconUrl} width="32px" />
                </li>
                <li className="list-inline-item">
                    {getTranslatedText(faction.name)}
                </li> 
                <div className="float-right">
                    <GameIcon type={FACTION_POINTS} value={faction.points} size={LARGE} />
                </div>
            </ul>
        </Card.Title>
        <Row>
            <Col md={3} className="mb-2">
                <Image rounded src={faction.imageUrl} className="w-100" />
            </Col>
            <Col md={9}>
                <Row>
                    {getTranslatedText(faction.description)}
                </Row>
                <Row className="mt-2">
                    <b><Translate id="factions.clans" /></b>: {faction.numClans}
                </Row>
            </Col>
        </Row>
    </Card.Body>
);

FactionDescription.propTypes = {
    faction: PropTypes.object.isRequired
};

export default FactionDescription;