import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar, Row, Col, Button } from 'react-bootstrap';
import { Translate } from "react-localize-redux";
import ReactTooltip from 'react-tooltip';

import { getTranslatedText } from '../../translations/translationUtils';

const BuildingListItem = ({building, selectedCharacter, constructBuilding, actionable}) => (
    <div className="mb-4 p-3 rounded bg-light">
        <Row>
            <Col md={4}>
                <img src={building.details.imageUrl} height="120px" alt="" />
            </Col>
            <Col md={actionable ? 6 : 8}>
                <b>{getTranslatedText(building.details.name)}</b>
                <p>{getTranslatedText(building.details.description)}</p>
                <p><small className="text-muted">{getTranslatedText(building.details.info)}</small></p>
                <b><Translate id="basic.level" />: </b> {building.level}
                <Row>
                    <Col md={4}>
                        <b><Translate id="basic.progress" /></b>: {building.progress}/{building.nextLevel}
                    </Col>
                    <Col md={8}>
                        <ProgressBar min={0} max={building.nextLevel} now={building.progress} />
                    </Col>
                </Row>
            </Col>
                { actionable && 
                <Col md={2}>
                    { selectedCharacter !== undefined ? 
                        <div>
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
                        </div>
                        : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
                    }
                </Col>
            }
        </Row>
        
    </div>
);

BuildingListItem.propTypes = {
    building: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    constructBuilding: PropTypes.func,
    actionable: PropTypes.bool.isRequired
};

export default BuildingListItem;