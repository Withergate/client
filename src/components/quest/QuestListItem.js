import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, ProgressBar, Card, Image } from 'react-bootstrap';

import { GameIcon } from '../shared/GameIcon';
import { CAPS, LARGE, FAME } from '../../constants/constants';
import { ActionButton } from '../shared/ActionButton';

const QuestListItem = ({quest, selectedCharacter, goOnQuest}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title>
                {getTranslatedText(quest.details.name)}
            </Card.Title>
            <Row>
                <Col md={4} className="mb-2">
                    <Image rounded src={quest.details.imageUrl} className="w-100" />
                </Col>
                <Col md={8}>
                    <Row>
                        {getTranslatedText(quest.details.description)}
                    </Row>
                    <Row>
                        <small><Translate id={"quest." + quest.details.type} /></small>
                    </Row>
                    <Row className="mt-2">
                        <b><Translate id="basic.reward" />: </b>
                        <GameIcon type={CAPS} size={LARGE} value={quest.details.capsReward} />
                        <GameIcon type={FAME} size={LARGE} value={quest.details.fameReward} />
                    </Row>
                    <Row className="mt-2">
                        <b><Translate id="basic.progress" />: </b>
                        <Col>
                            <ProgressBar min={0}
                                max={quest.details.completion}
                                now={quest.progress}
                                label={`${quest.progress}/${quest.details.completion}`} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card.Body>
        <Card.Footer>
            { selectedCharacter !== undefined ?
                <Row>
                    <ActionButton
                        character={selectedCharacter}
                        action={() => goOnQuest(quest.id, selectedCharacter.id)}
                        buttonText="labels.go"
                        tooltip="quest.tooltip" />
                </Row>
                : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
            }
        </Card.Footer>
    </Card>
);

QuestListItem.propTypes = {
    quest: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    goOnQuest: PropTypes.func.isRequired
};

export default QuestListItem;