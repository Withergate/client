import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col } from 'react-bootstrap';
import { GameIcon } from '../shared/GameIcon';
import { LARGE, FAME, FACTION_POINTS, FACTION_SUPPORT } from '../../constants/constants';
import ActionButton from '../shared/ActionButton';
import ActionCost from '../shared/ActionCost';

const FactionAid = ({aid, selectedCharacter, factionAction}) => (
    <div className="mb-4">
        <Row>
            <Col md={8}>
                <Row>
                    <Col>
                        <p>{getTranslatedText(aid.description)}</p>
                        <p><small><Translate id={"factions." + aid.aidType} /></small></p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <b><Translate id="basic.price" />:</b>
                            </li>
                            <ActionCost actionCost={aid.actionCost} />
                        </ul>
                    </Col>
                </Row>
                { (aid.factionPoints > 0 || aid.fame > 0) &&
                <Row>
                    <Col>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <b><Translate id="basic.reward" />:</b>
                            </li>
                            {
                                aid.factionPoints > 0 &&
                                <li className="list-inline-item">
                                    <GameIcon type={FACTION_POINTS} size={LARGE} value={aid.factionPoints} noPadding />
                                </li>
                            }
                            {
                                aid.fame > 0 &&
                                <li className="list-inline-item">
                                    <GameIcon type={FAME} size={LARGE} value={aid.fame} noPadding />
                                </li>
                            }
                        </ul>
                    </Col>
                </Row>
                }
                { aid.leading &&
                <Row>
                    <Col className="text-danger"><Translate id="factions.leading" /></Col>
                </Row>
                }
            </Col>
            <Col md={4}>
                { selectedCharacter !== undefined ?
                    <ActionButton
                        character={selectedCharacter}
                        action={() => factionAction(selectedCharacter.id, FACTION_SUPPORT, null, aid.identifier)}
                        buttonText="labels.go"
                        tooltip="factions.aidTooltip" />
                    : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
                }
            </Col>
        </Row>
    </div>
);

FactionAid.propTypes = {
    aid: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    factionAction: PropTypes.func.isRequired
};

export default FactionAid;