import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { Row, Col } from 'react-bootstrap';
import { GameIcon } from '../shared/GameIcon';
import { LARGE, CAPS, INJURY, FAME, FACTION_POINTS, FACTION_SUPPORT } from '../../constants/constants';
import { ActionButton } from '../shared/ActionButton';

const FactionAid = ({aid, selectedCharacter, factionAction}) => (
    <div className="mb-4">
        <Row>
            <Col md={8}>
                <Row>
                    <Col>
                        <p><Translate id={"factions." + aid.aidType} /></p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <b><Translate id="basic.price" />:</b>
                            </li>
                            { aid.cost !== 0 &&
                                <li className="list-inline-item">
                                    <GameIcon type={CAPS} size={LARGE} value={aid.capsCost} />
                                </li>
                            }
                            { aid.healthCost &&
                                <li className="list-inline-item">
                                    <GameIcon type={INJURY} size={LARGE} />
                                </li>
                            }
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <b><Translate id="basic.reward" />:</b>
                            </li>
                            <li className="list-inline-item">
                                <GameIcon type={FAME} size={LARGE} value={aid.fame} noPadding />
                            </li>
                            <li className="list-inline-item">
                                <GameIcon type={FACTION_POINTS} size={LARGE} value={aid.factionPoints} noPadding />
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Col>
            <Col md={4}>
                { selectedCharacter !== undefined ?
                    <ActionButton
                        character={selectedCharacter}
                        action={() => factionAction(selectedCharacter.id, FACTION_SUPPORT, null, aid.id)}
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