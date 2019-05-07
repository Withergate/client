import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Button, ProgressBar, Card, Image } from 'react-bootstrap';

import caps from '../../images/caps.png';
import fame from '../../images/fame.png';

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
                    <p>{getTranslatedText(quest.details.description)}</p>
                    <ProgressBar min={0}
                        max={quest.details.completion}
                        now={quest.progress}
                        label={`${quest.progress}/${quest.details.completion}`}
                    />
                    <p className="mt-2">
                        <span><Image height="20" src={caps} /> <b>{quest.details.capsReward}</b> </span>
                        <span><Image height="20" src={fame} /> <b>{quest.details.fameReward}</b> </span>
                    </p>
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
                    <Translate id="labels.goOnQuest" />
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