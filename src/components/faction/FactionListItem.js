import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Card, Image } from 'react-bootstrap';
import { ActionButton } from '../shared/ActionButton';


const FactionListItem = ({faction, selectedCharacter, joinFaction }) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title>
            <ul className="list-inline">
                <li className="list-inline-item">
                    <Image src={faction.iconUrl} width="32px" />
                </li>
                <li className="list-inline-item">
                    {getTranslatedText(faction.name)}
                </li> 

                </ul>
            </Card.Title>
            <Row>
                <Col md={4} className="mb-2">
                    <Image rounded src={faction.imageUrl} className="w-100" />
                </Col>
                <Col md={8}>
                    <Row>
                        {getTranslatedText(faction.description)}
                    </Row>
                </Col>
            </Row>
        </Card.Body>
        <Card.Footer>
            { selectedCharacter !== undefined ?
                <Row>
                    <ActionButton
                        character={selectedCharacter}
                        action={() => joinFaction()}
                        buttonText="factions.join"
                        tooltip="factions.joinTooltip" />
                </Row>
                : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
            }
        </Card.Footer>
    </Card>
);

FactionListItem.propTypes = {
    faction: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    joinFaction: PropTypes.func.isRequired
};

export default FactionListItem;