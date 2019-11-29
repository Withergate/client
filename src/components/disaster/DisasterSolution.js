import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Card } from 'react-bootstrap';
import { GameIcon } from '../shared/GameIcon';
import { LARGE, CAPS, JUNK, FOOD } from '../../constants/constants';
import { ActionButton } from '../shared/ActionButton';

const DisasterSolution = ({solution, selectedCharacter, disasterAction}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title>
                {getTranslatedText(solution.name)}
            </Card.Title>
            <Row>
                <Col md={10} className="mb-4">
                    <Row>
                        <Col>
                            <p>{getTranslatedText(solution.description)}</p>
                            <p><small><Translate id={"disaster." + solution.solutionType} /></small></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <b><Translate id="basic.price" />:</b>
                                </li>
                                {
                                    solution.foodCost === 0 && solution.junkCost === 0 && solution.capsCost === 0 &&
                                    <li className="list-inline-item">
                                        <Translate id="labels.free" />
                                    </li>
                                }
                                { solution.foodCost !== 0 &&
                                    <li className="list-inline-item">
                                        <GameIcon type={FOOD} size={LARGE} value={solution.foodCost} />
                                    </li>
                                }
                                { solution.junkCost !== 0 &&
                                    <li className="list-inline-item">
                                        <GameIcon type={JUNK} size={LARGE} value={solution.junkCost} />
                                    </li>
                                }
                                { solution.capsCost !== 0 &&
                                    <li className="list-inline-item">
                                        <GameIcon type={CAPS} size={LARGE} value={solution.capsCost} />
                                    </li>
                                }
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <b><Translate id="labels.disasterSolutionReward" />: </b>{solution.bonus}%
                        </Col>
                    </Row>
                </Col>
                <Col md={2}>
                    { selectedCharacter !== undefined ?
                        <ActionButton
                            character={selectedCharacter}
                            action={() => disasterAction(selectedCharacter.id, solution.identifier)}
                            buttonText="labels.go"
                            tooltip="disaster.tooltip" />
                        : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
                    }
                </Col>
            </Row>
        </Card.Body>
    </Card>
);

DisasterSolution.propTypes = {
    solution: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    disasterAction: PropTypes.func.isRequired
};

export default DisasterSolution;