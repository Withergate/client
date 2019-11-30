import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar, Row, Col, Card, Image } from 'react-bootstrap';
import { Translate } from "react-localize-redux";
import { GameIcon } from '../shared/GameIcon';
import { JUNK, LARGE } from '../../constants/constants';

import { getTranslatedText } from '../../translations/translationUtils';
import { ActionButton } from '../shared/ActionButton';

const BuildingListItem = ({building, selectedCharacter, constructBuilding, actionable}) => (
    <Card className="mb-4" key={building.id}>
        <Card.Body>
            <Card.Title>
                {getTranslatedText(building.details.name)}
            </Card.Title>
            <Row>
                <Col md={4} className="mb-2">
                    <Image src={building.details.imageUrl} rounded className="w-100" />
                </Col>
                <Col md={8}>
                    <p>{getTranslatedText(building.details.description)}</p>
                    <p><small className="text-muted">{getTranslatedText(building.details.info)}</small></p>
                    <p>
                        <b><Translate id="basic.level" />: </b> {building.level}
                    </p>
                    { actionable && building.details.visitable && 
                
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <b><Translate id="labels.visitCost" />: </b>
                            </li>
                            <li className="list-inline-item">
                                <GameIcon type={JUNK} size={LARGE} value={building.visitJunkCost} />
                            </li>
                        </ul>
                    }
                    <ProgressBar
                        min={0}
                        max={building.nextLevel}
                        now={building.progress}
                        label={`${building.progress}/${building.nextLevel}`} />
                </Col>
            </Row>
        </Card.Body>
        { actionable && 
            <Card.Footer>
                { selectedCharacter !== undefined ? 
                    <Row>
                        <ActionButton
                            character={selectedCharacter}
                            action={() => constructBuilding(building.details.identifier, selectedCharacter.id, 'CONSTRUCT')}
                            buttonText="labels.construct"
                            tooltip="labels.buildingConstruction" />
                        {
                            building.details.visitable &&
                                <ActionButton
                                    character={selectedCharacter}
                                    action={() => constructBuilding(building.details.identifier, selectedCharacter.id, 'VISIT')}
                                    buttonText="labels.visit"
                                    tooltip="labels.buildingVisit"
                                    condition={building.level < 1} />
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