import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Card, Image } from 'react-bootstrap';

import { GameIcon } from '../shared/GameIcon';
import { FOOD, LARGE, JUNK, INFORMATION, ITEM_CHANCE, ENCOUNTER } from '../../constants/constants';
import { ActionButton } from '../shared/ActionButton';

const LocationListItem = ({location, selectedCharacter, onVisit}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title>
                <ul className="list-inline">
                    <li className="list-inline-item">{getTranslatedText(location.name)}</li>
                    <li className="list-inline-item"><GameIcon type={ENCOUNTER} size={LARGE} value={location.encounterChance + "%"} /></li>
                </ul>
            </Card.Title>
            <Row>
                <Col md={4} className="mb-2">
                    <Image rounded width="240px" src={location.imageUrl} />
                </Col>
                <Col md={8}>
                    <Row>
                        <Col>
                            <p>{getTranslatedText(location.description)}</p>
                            <p><small className="text-muted">{getTranslatedText(location.info)}</small></p>
                            <ul className="list-inline">
                                <li className="list-inline-item"><b><Translate id="basic.bonus" />: </b></li>
                                <li className="list-inline-item"><GameIcon type={FOOD} size={LARGE} value={location.foodBonus} /></li>
                                <li className="list-inline-item"><GameIcon type={JUNK} size={LARGE} value={location.junkBonus} /></li>
                                {   location.scouting &&
                                    <li className="list-inline-item"><GameIcon type={INFORMATION} size={LARGE} value={location.informationBonus} /></li>
                                }
                                <li className="list-inline-item"><GameIcon type={ITEM_CHANCE} size={LARGE} value={location.itemChance + "%"} /></li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card.Body>
        <Card.Footer>
            { selectedCharacter !== undefined ? 
                <Row>
                    <ActionButton
                        character={selectedCharacter}
                        action={() => onVisit(selectedCharacter.id, location.location, "VISIT")}
                        buttonText="labels.search"
                        tooltip="location.visit" />
                    { 
                        location.scouting &&
                            <ActionButton
                                character={selectedCharacter}
                                action={() => onVisit(selectedCharacter.id, location.location, "SCOUT")}
                                buttonText="labels.scout"
                                tooltip="location.scout" />
                        }
                </Row>
                : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
            }
        </Card.Footer>
    </Card>
);

LocationListItem.propTypes = {
    location: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    onVisit: PropTypes.func.isRequired
};

export default LocationListItem;