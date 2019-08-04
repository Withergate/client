import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Card, Image, ProgressBar } from 'react-bootstrap';
import { GameIcon } from '../shared/GameIcon';
import { FAME, LARGE } from '../../constants/constants';

const renderPenaltyText = (penalty, i, progress, partialThreshold, failureThreshold) => {
    if (i === 2 && progress >= failureThreshold) {
        return <s><Translate id={penalty.penaltyType} /></s>
    }
    if (i === 1 && progress >= partialThreshold) {
        return <s><Translate id={penalty.penaltyType} /></s>
    }
    if (i === 0 && progress >= 100) {
        return <s><Translate id={penalty.penaltyType} /></s>
    }
    return <Translate id={penalty.penaltyType} />
}

const DisasterInfo = (props) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title>
                {getTranslatedText(props.disaster.details.name)}
            </Card.Title>
            <Row>
                <Col md={4}>
                    <Image rounded width="240px" src={props.disaster.details.imageUrl} />
                </Col>
                <Col md={8}>
                    <Row>
                        <Col>
                            <p>{getTranslatedText(props.disaster.details.description)}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <p><b><Translate id="labels.disasterConsequences" /></b></p>
                            <ul>
                                {
                                    props.disaster.details.penalties.map((penalty, i) =>
                                        <li key={penalty.identifier}>{renderPenaltyText(penalty, i, props.progress, 
                                            props.partialThreshold, props.failureThreshold)}
                                        </li>
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
                                    <GameIcon type={FAME} size={LARGE} value={props.disaster.details.fameReward} />
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p><Translate id="labels.disasterTurn" data={{ turn: props.disaster.turn }}/></p>
                            
                            <ProgressBar min={0}
                                max={100}
                                now={props.progress}
                                label={`${props.progress}%`} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card.Body>
    </Card>
);

DisasterInfo.propTypes = {
    disaster: PropTypes.object.isRequired,
    progress: PropTypes.number.isRequired,
    partialThreshold: PropTypes.number.isRequired,
    failureThreshold: PropTypes.number.isRequired,
};

export default DisasterInfo;