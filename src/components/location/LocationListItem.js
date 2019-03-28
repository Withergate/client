import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import ReactTooltip from 'react-tooltip';

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Button } from 'react-bootstrap';

const LocationListItem = ({location, selectedCharacter, onVisit}) => (
    <div className="mb-4 p-3 rounded bg-light" key={location.location}>
        <Row>
            <Col md={4}>
                <img className="mb-2 w-100" src={location.imageUrl}  alt={location.location} />
            </Col>
            <Col md={6}>
                <h5>{getTranslatedText(location.name)}</h5>
                <p>{getTranslatedText(location.description)}</p>
                <p><small className="text-muted">{getTranslatedText(location.info)}</small>
                </p>
            </Col>
            <Col md={2}>
                { selectedCharacter !== undefined ? 
                    <div>
                        <Button
                            variant="dark"
                            data-tip data-for="visitButton"
                            className="m-2 button-classic" 
                            onClick={() => onVisit(selectedCharacter.id, location.location, "VISIT")}
                            disabled={selectedCharacter.state !== 'READY'}>
                            <Translate id="labels.visit" />
                        </Button>
                        <ReactTooltip id="visitButton" effect="solid" place="left">
                            <Translate id="labels.locationVisit" />
                        </ReactTooltip>
                        { 
                            location.scouting && 
                            <div>
                                <Button
                                    variant="dark"
                                    data-tip data-for="scoutButton"
                                    className="m-2 button-classic" 
                                    onClick={() => onVisit(selectedCharacter.id, location.location, "SCOUT")}
                                    disabled={selectedCharacter.state !== 'READY'}>
                                    <Translate id="labels.scout" />
                                </Button>
                                <ReactTooltip id="scoutButton" effect="solid" place="left">
                                    <Translate id="labels.locationScout" />
                                </ReactTooltip>
                            </div>
                        }
                    </div>
                    : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
                }
            </Col>
        </Row>
    </div>
);

LocationListItem.propTypes = {
    location: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    onVisit: PropTypes.func.isRequired
};

export default LocationListItem;