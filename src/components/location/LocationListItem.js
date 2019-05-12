import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Button, Card, Image } from 'react-bootstrap';
import TooltipWrapper from '../shared/TooltipWrapper';

import junkIcon from '../../images/junk.png';
import foodIcon from '../../images/food.png';
import informationIcon from '../../images/information.png'
import itemIcon from '../../images/item.png';

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
                        <p>{getTranslatedText(location.description)}</p>
                        <p><small className="text-muted">{getTranslatedText(location.info)}</small></p>
                    </Row>
                    <Row>
                        <b><Translate id="basic.bonus" />: </b>
                        <TooltipWrapper textKey="basic.food">
                            {location.foodBonus} <Image height="20" src={foodIcon} />
                        </TooltipWrapper>
                        <TooltipWrapper textKey="basic.junk">
                            {location.junkBonus} <Image height="20" src={junkIcon} />
                        </TooltipWrapper>
                        <TooltipWrapper textKey="basic.information">
                            {location.informationBonus} <Image height="20" src={informationIcon} />
                        </TooltipWrapper>
                        <TooltipWrapper textKey="basic.itemChance">
                            {location.itemChance} <Image height="20" src={itemIcon} />
                        </TooltipWrapper>
                    </Row>
                </Col>
            </Row>
        </Card.Body>
        <Card.Footer>
            { selectedCharacter !== undefined ? 
                <Row>
                    <TooltipWrapper textKey={"location.visit"}>
                        <Button
                            variant="dark"
                            className="m-2 button-classic" 
                            onClick={() => onVisit(selectedCharacter.id, location.location, "VISIT")}
                            disabled={selectedCharacter.state !== 'READY'}>
                            <Translate id="labels.visit" />
                        </Button>
                    </TooltipWrapper>
                    { 
                        location.scouting && 
                            <TooltipWrapper textKey={"location.scout"}>
                                <Button
                                    variant="dark"
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