import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar, Row, Col, Button, Card, Image } from 'react-bootstrap';
import { Translate } from "react-localize-redux";
import ReactTooltip from 'react-tooltip';

import { getTranslatedText } from '../../translations/translationUtils';

const BuildingListItem = ({building, selectedCharacter, constructBuilding, actionable}) => (
    <Card className="mb-4" key={building.id}>
        <Card.Body>
            <Card.Title>
                {getTranslatedText(building.details.name)}
            </Card.Title>
            <Row>
                <Col md={4}>
                    <Image src={building.details.imageUrl} rounded height="120px" />
                </Col>
                <Col md={8}>
                    <p>{getTranslatedText(building.details.description)}</p>
                    <p><small className="text-muted">{getTranslatedText(building.details.info)}</small></p>
                    <p>
                        <b><Translate id="basic.level" />: </b> {building.level}
                    </p>
                    <ProgressBar min={0} max={building.nextLevel} now={building.progress} label={`${building.progress}/${building.nextLevel}`} />
                </Col>
            </Row>
        </Card.Body>
        { actionable && 
            <Card.Footer>
                { selectedCharacter !== undefined ? 
                    <Row>
                        <Button
                            data-tip data-for="construct"
                            variant="dark"
                            className="m-2 button-classic"
                            onClick={() => constructBuilding(building.details.identifier, selectedCharacter.id, 'CONSTRUCT')}
                            disabled={selectedCharacter.state !== 'READY'}>
                            <Translate id="labels.construct" />
                        </Button>
                        <ReactTooltip id="construct" effect="solid" place="left">
                            <Translate id="labels.buildingConstruction" />
                        </ReactTooltip>
                        {
                            building.details.visitable && 
                            <div>
                                <Button
                                    data-tip data-for="visit"
                                    variant="dark"
                                    className="m-2 button-classic"
                                    onClick={() => constructBuilding(building.details.identifier, selectedCharacter.id, 'VISIT')}
                                    disabled={selectedCharacter.state !== 'READY' || building.level < 1}>
                                    <Translate id="labels.visit" />
                                </Button>
                                <ReactTooltip id="visit" effect="solid" place="left">
                                    <Translate id="labels.buildingVisit" />
                                </ReactTooltip>
                            </div>
                        }
                    </Row>
                    : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
                }
            </Card.Footer>
        }
    </Card>
);

BuildingListItem.propTypes = {
    building: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    constructBuilding: PropTypes.func,
    actionable: PropTypes.bool.isRequired
};

export default BuildingListItem;