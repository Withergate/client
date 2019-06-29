import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Button, ProgressBar, Card, Image } from 'react-bootstrap';

import { GameIcon } from '../shared/GameIcon';
import { CAPS, LARGE, FAME } from '../../constants/constants';

const QuestListItem = ({quest, selectedCharacter, goOnQuest}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title>
                {getTranslatedText(quest.details.name)}
            </Card.Title>
            <Row>
                <Col md={4}>
                    <Image rounded src={quest.details.imageUrl} height="120px" />
                </Col>
                <Col md={8}>
                    <Row>
                        {getTranslatedText(quest.details.description)}
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
                <Button 
                    variant="dark"
                    className="button-classic" 
                    disabled={selectedCharacter.state !== 'READY'}
                    onClick={() => goOnQuest(quest.id, selectedCharacter.id)}>
                    <Translate id="labels.go" />
                </Button> 
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