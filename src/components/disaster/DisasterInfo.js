import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Card, Image, ProgressBar } from 'react-bootstrap';
import { GameIcon } from '../shared/GameIcon';
import { FAME, LARGE } from '../../constants/constants';

const DisasterInfo = ({disaster, progress}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title>
                {getTranslatedText(disaster.details.name)}
            </Card.Title>
            <Row>
                <Col md={4}>
                    <Image rounded width="240px" src={disaster.details.imageUrl} />
                </Col>
                <Col md={8}>
                    <Row>
                        <Col>
                            <p>{getTranslatedText(disaster.details.description)}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <p><b><Translate id="labels.disasterConsequences" /></b></p>
                            <ul>
                                {
                                    disaster.details.penalties.map(penalty =>
                                        <li key={penalty.identifier}><Translate id={penalty.penaltyType} /></li>
                                    )
                                }
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <b><Translate id="basic.reward" />: </b>
                                </li>
                                <li className="list-inline-item">
                                    <GameIcon type={FAME} size={LARGE} value={disaster.details.fameReward} />
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p><Translate id="labels.disasterTurn" data={{ turn: disaster.turn }}/></p>
                            
                            <ProgressBar min={0}
                                max={100}
                                now={progress}
                                label={`${progress}%`} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card.Body>
    </Card>
);

DisasterInfo.propTypes = {
    disaster: PropTypes.object.isRequired,
    progress: PropTypes.number.isRequired
};

export default DisasterInfo;