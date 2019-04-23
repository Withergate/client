import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import ReactTooltip from 'react-tooltip';

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Button, Card, Image } from 'react-bootstrap';

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
                    <p>{getTranslatedText(location.description)}</p>
                    <p><small className="text-muted">{getTranslatedText(location.info)}</small></p>
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
                        <Translate id={location.location.concat(".visit")} />
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
                                    <Translate id={location.location.concat(".scout")} />
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