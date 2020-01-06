import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { Row, Col, Card, Image } from 'react-bootstrap';
import { GameIcon } from '../shared/GameIcon';
import { LARGE, FAME, FACTION_POINTS } from '../../constants/constants';
import { getTranslatedText } from '../../translations/translationUtils';

const FactionsOverview = ({overview}) => (
    <div>
        <Card className="mb-4">
            <Card.Body>
                <Card.Title><Translate id="factions.clanOverview" /></Card.Title>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <Translate id="factions.clanPoints" />:
                    </li>
                    <li className="list-inline-item">
                        <GameIcon type={FACTION_POINTS} size={LARGE} value={overview.clanPoints} noPadding />
                    </li>
                </ul>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <Translate id="factions.expectedFame" />:
                    </li>
                    <li className="list-inline-item">
                        <GameIcon type={FAME} size={LARGE} value={overview.clanFame} noPadding />
                    </li>
                </ul>
            </Card.Body>
        </Card>
        <Card className="mb-4">
            <Card.Body>
                <Card.Title><Translate id="factions.factionsOverview" /></Card.Title>
                { overview.factions.map(faction => 
                    <Row key={faction.identifier}>
                        <Col xs={7}>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <Image src={faction.iconUrl} width="24px" />
                                </li>
                                <li className="list-inline-item">
                                    {getTranslatedText(faction.name)}:
                                </li>
                            </ul>
                        </Col>
                        <Col xs={5}>
                            <li className="list-inline-item">
                                <GameIcon type={FACTION_POINTS} size={LARGE} value={faction.points} noPadding />
                            </li>
                            <li className="list-inline-item">
                                <GameIcon type={FAME} size={LARGE} value={faction.fame} noPadding />
                            </li>
                        </Col>
                    </Row>
                )
            }
        </Card.Body>
    </Card>
    </div>
    
);

FactionsOverview.propTypes = {
    overview: PropTypes.object.isRequired
};

export default FactionsOverview;