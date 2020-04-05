import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Card, Image } from 'react-bootstrap';

import { GameIcon } from '../shared/GameIcon';
import { CAPS, LARGE, FAME, FACTION_POINTS, FOOD, JUNK, INJURY, ITEM } from '../../constants/constants';
import ActionButton from '../shared/ActionButton';
import AnnotatedProgressBar from '../shared/AnnotatedProgressBar';

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
                    <p>{getTranslatedText(quest.details.description)}</p>
                    { quest.details.condition && 
                        <p>
                            <small><Translate id={"conditions." + quest.details.condition} /></small>
                        </p>
                    }
                    <p>
                        <small><Translate id={"solutions." + quest.details.type} /></small>
                    </p>
                    <p>
                        <ul className="list-inline">
                            <li className="list-inline-item"><b><Translate id="basic.price" />: </b></li>
                            {
                                quest.details.foodCost > 0 &&
                                <li className="list-inline-item"><GameIcon type={FOOD} size={LARGE} value={quest.details.foodCost} /></li>
                            }
                            {
                                quest.details.junkCost > 0 &&
                                <li className="list-inline-item"><GameIcon type={JUNK} size={LARGE} value={quest.details.junkCost} /></li>
                            }
                            {
                                quest.details.healthCost &&
                                <li className="list-inline-item"><GameIcon type={INJURY} size={LARGE} value="1-6" /></li>
                            }
                            {
                                quest.details.itemCost &&
                                <li className="list-inline-item">
                                    <GameIcon type={ITEM} size={LARGE} value={<small><Translate id={"items.cost." + quest.details.itemCost} /></small>} />
                                </li>
                            }
                            {
                                !quest.details.itemCost && !quest.details.junkCost && !quest.details.healthCost && !quest.details.foodCost &&
                                <li className="list-inline-item"><b><Translate id="labels.free" />: </b></li>
                            }
                        </ul>
                    </p>
                    <p>
                        <ul className="list-inline">
                            <li className="list-inline-item"><b><Translate id="basic.reward" />: </b></li>
                            {
                                quest.details.capsReward > 0 &&
                                <li className="list-inline-item"><GameIcon type={CAPS} size={LARGE} value={quest.details.capsReward} /></li>
                            }
                            {
                                quest.details.fameReward > 0 &&
                                <li className="list-inline-item"><GameIcon type={FAME} size={LARGE} value={quest.details.fameReward} /></li>
                            }
                            {
                                quest.details.factionReward > 0 &&
                                <li className="list-inline-item"><GameIcon type={FACTION_POINTS} size={LARGE} value={quest.details.factionReward} /></li>
                            }
                        </ul>
                    </p>
                    {
                        quest.details.followUp &&
                        <p><small><Translate id="labels.questFollowUp" /></small></p>
                    }
                    
                    <AnnotatedProgressBar
                        value={quest.progress}
                        max={quest.details.completion} />
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