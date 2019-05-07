import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import ReactTooltip from 'react-tooltip';

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Button, Card, Image } from 'react-bootstrap';
import { TooltipIcon } from '../shared/TooltipIcon';

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
                        <TooltipIcon textKey="basic.food">
                            {location.foodBonus} <Image height="20" src={foodIcon} />
                        </TooltipIcon>
                        <TooltipIcon textKey="basic.junk">
                            {location.junkBonus} <Image height="20" src={junkIcon} />
                        </TooltipIcon>
                        <TooltipIcon textKey="basic.information">
                            {location.informationBonus} <Image height="20" src={informationIcon} />
                        </TooltipIcon>
                        <TooltipIcon textKey="basic.itemChance">
                            {location.itemChance} <Image height="20" src={itemIcon} />
                        </TooltipIcon>
                    </Row>
                </Col>
            </Row>
        </Card.Body>
        <Card.Footer>
            { selectedCharacter !== undefined ? 
                <Row>
                    <Button
                        variant="dark"
                        data-tip data-for={location.location.concat(".visit")}
                        className="m-2 button-classic" 
                        onClick={() => onVisit(selectedCharacter.id, location.location, "VISIT")}
                        disabled={selectedCharacter.state !== 'READY'}>
                        <Translate id="labels.visit" />
                    </Button>
                    <ReactTooltip id={location.location.concat(".visit")} effect="solid" place="left">
                        <Translate id="location.visit" />
                    </ReactTooltip>
                    { 
                        location.scouting && 
                            <div>
                                <Button
                                    variant="dark"
                                    data-tip data-for={location.location.concat(".scout")}
                                    className="m-2 button-classic" 
                                    onClick={() => onVisit(selectedCharacter.id, location.location, "SCOUT")}
                                    disabled={selectedCharacter.state !== 'READY'}>
                                    <Translate id="labels.scout" />
                                </Button>
                                <ReactTooltip id={location.location.concat(".scout")} effect="solid" place="left">
                                    <Translate id="location.scout" />
                                </ReactTooltip>
                            </div>
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