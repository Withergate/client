import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, Image } from 'react-bootstrap';
import { Translate } from "react-localize-redux";

import AttributeBar from '../clan/AttributeBar';
import { GameIcon } from '../shared/GameIcon';
import { CAPS, LARGE, COMBAT, SCAVENGE, CRAFTSMANSHIP, INTELLECT, HEALTH, FAME } from '../../constants/constants';
import ActionButton from '../shared/ActionButton';
import CharacterHeader from '../clan/CharacterHeader';
import { InfoIcon } from '../shared/InfoIcon';

const TavernOfferListItem = ({offer, visitTavern, selectedCharacter}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title>
                <CharacterHeader character={offer.character} size={LARGE} />
            </Card.Title>
            <Row>
                <Col md={2} xs={5} className="mb-2">
                    <Image rounded className="w-100" src={offer.character.imageUrl} />
                </Col>
                <Col md={4} xs={7} className="mb-2">
                    <AttributeBar name="basic.combat" value={offer.character.combat} iconType={COMBAT} />
                    <AttributeBar name="basic.scavenge" value={offer.character.scavenge} iconType={SCAVENGE} />
                    <AttributeBar name="basic.craftsmanship" value={offer.character.craftsmanship} iconType={CRAFTSMANSHIP} />
                    <AttributeBar name="basic.intellect" value={offer.character.intellect} iconType={INTELLECT} />
                    <AttributeBar 
                            name="basic.health"
                            value={offer.character.hitpoints} 
                            iconType={HEALTH}
                            max={offer.character.maxHitpoints}
                            variant="success" />
                </Col>
                <Col md={2} className="mb-3">
                    <GameIcon type={CAPS} size={LARGE} value={offer.price} noPadding />
                    {
                        offer.fame > 0 &&
                        <div className="inline mt-2">
                            <GameIcon type={FAME} size={LARGE} value={offer.fame} noPadding />
                            <InfoIcon textKey="labels.specialTavernOffer" />
                        </div>
                    }
                </Col>
                <Col md={2}>
                    { selectedCharacter !== undefined ?
                        <Row>
                            <ActionButton
                                character={selectedCharacter}
                                action={() => visitTavern(selectedCharacter.id, offer.id)}
                                buttonText="labels.hire"
                                tooltip="tavern.tooltip" />
                        </Row>
                        : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
                    }
                </Col>
            </Row>
        </Card.Body>
    </Card>
);

TavernOfferListItem.propTypes = {
    offer: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    visitTavern: PropTypes.func.isRequired
};

export default TavernOfferListItem;