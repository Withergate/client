import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar, Row, Col, Button, Card, Image } from 'react-bootstrap';
import { Translate } from "react-localize-redux";
import TooltipWrapper from '../shared/TooltipWrapper';
import { GameIcon } from '../shared/GameIcon';
import { JUNK, LARGE } from '../../constants/constants';

import { getTranslatedText } from '../../translations/translationUtils';

const BuildingListItem = ({building, selectedCharacter, constructBuilding, actionable}) => (
    <Card className="mb-4" key={building.id}>
        <Card.Body>
            <Card.Title>
                {getTranslatedText(building.details.name)}
            </Card.Title>
            <Row>
                <Col md={4}>
                    <Image src={building.details.imageUrl} rounded width="240px" />
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
                        <TooltipWrapper textKey="labels.buildingConstruction">
                            <Button
                                variant="success"
                                className="m-2 button-classic"
                                onClick={() => constructBuilding(building.details.identifier, selectedCharacter.id, 'CONSTRUCT')}
                                disabled={selectedCharacter.state !== 'READY'}>
                                <Translate id="labels.construct" />
                            </Button>
                        </TooltipWrapper>
                        {
                            building.details.visitable && 
                            <TooltipWrapper textKey="labels.buildingVisit">
                                <Button
                                    variant="success"
                                    className="m-2 button-classic"
                                    onClick={() => constructBuilding(building.details.identifier, selectedCharacter.id, 'VISIT')}
                                    disabled={selectedCharacter.state !== 'READY' || building.level < 1}>
                                    <Translate id="labels.visit" />
                                </Button>
                            </TooltipWrapper>
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