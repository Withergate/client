import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Button, Card, Image } from 'react-bootstrap';
import TooltipWrapper from '../shared/TooltipWrapper';

import { GameIcon } from '../shared/GameIcon';
import { FOOD, LARGE, JUNK, INFORMATION, ITEM_CHANCE, ENCOUNTER } from '../../constants/constants';

const LocationListItem = ({location, selectedCharacter, onVisit}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title>
                {getTranslatedText(location.name)}
            </Card.Title>
            <Row>
                <Col md={4}>
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
                                <li className="list-inline-item"><GameIcon type={ENCOUNTER} size={LARGE} value={location.encounterChance + "%"} /></li>
                            </ul>
                        </Col>
                    </Row>
                    
                </Col>
            </Row>
        </Card.Body>
        <Card.Footer>
            { selectedCharacter !== undefined ? 
                <Row>
                    <TooltipWrapper textKey={"location.visit"}>
                        <Button
                            variant="success"
                            className="m-2 button-classic" 
                            onClick={() => onVisit(selectedCharacter.id, location.location, "VISIT")}
                            disabled={selectedCharacter.state !== 'READY'}>
                            <Translate id="labels.search" />
                        </Button>
                    </TooltipWrapper>
                    { 
                        location.scouting && 
                            <TooltipWrapper textKey={"location.scout"}>
                                <Button
                                    variant="success"
                                    className="m-2 button-classic" 
                                    onClick={() => onVisit(selectedCharacter.id, location.location, "SCOUT")}
                                    disabled={selectedCharacter.state !== 'READY'}>
                                    <Translate id="labels.scout" />
                                </Button>
                            </TooltipWrapper>
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