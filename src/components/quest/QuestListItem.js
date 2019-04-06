import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Button, ProgressBar } from 'react-bootstrap';

import caps from '../../images/caps.png';
import fame from '../../images/fame.png';

const QuestListItem = ({quest, selectedCharacter, goOnQuest}) => (
    <div className="mb-4 p-3 rounded bg-light" key={quest.id}>
        <Row>
            <Col md={4}>
                <img src={quest.details.imageUrl} height="120px" alt="" />
            </Col>
            <Col md={6}>
                <b>{getTranslatedText(quest.details.name)}</b>
                <p>{getTranslatedText(quest.details.description)}</p>
                <b><Translate id="basic.progress" /></b>: {quest.progress}/{quest.details.completion}
                <ProgressBar min={0} max={quest.details.completion} now={quest.progress} />
                <p className="mt-2">
                    <span><img height="20" src={caps} alt="" /> <b>{quest.details.capsReward}</b> </span>
                    <span><img height="20" src={fame} alt="" /> <b>{quest.details.fameReward}</b> </span>
                </p>
            </Col>
            <Col md={2}>
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
            </Col>
        </Row>
    </div>
);

QuestListItem.propTypes = {
    quest: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    goOnQuest: PropTypes.func.isRequired
};

export default QuestListItem;