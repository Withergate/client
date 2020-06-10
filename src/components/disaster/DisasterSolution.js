import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Card } from 'react-bootstrap';
import ActionButton from '../shared/ActionButton';
import ActionCost from '../shared/ActionCost';

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
                            <p><small><Translate id={"solutions." + solution.solutionType} /></small></p>
                            { solution.condition && 
                                <p className="mt-2">
                                    <small><Translate id={"conditions." + solution.condition} /></small>
                                </p>
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <ActionCost actionCost={solution.actionCost} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <b><Translate id="disaster.disasterSolutionReward" />: </b>{solution.bonus}%
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