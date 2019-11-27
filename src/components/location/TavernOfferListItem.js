import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, Image } from 'react-bootstrap';
import { Translate } from "react-localize-redux";

import AttributeBar from '../clan/AttributeBar';
import { GameIcon } from '../shared/GameIcon';
import { CAPS, LARGE, COMBAT, SCAVENGE, CRAFTSMANSHIP, INTELLECT, HEALTH } from '../../constants/constants';
import TraitItem from '../clan/TraitItem';
import { ActionButton } from '../shared/ActionButton';
import CharacterHeader from '../clan/CharacterHeader';

const TavernOfferListItem = ({offer, visitTavern, selectedCharacter}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title>
                <CharacterHeader character={offer.character} size={LARGE} />
            </Card.Title>
            <Row>
                <Col md={2}>
                    <Image rounded width="120px" src={offer.character.imageUrl} />
                </Col>
                <Col md={4}>
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
                <Col md={2}>
                    {
                        offer.character.traits.length > 0 ?
                            offer.character.traits.map(trait => <TraitItem trait={trait} key={trait.id} />)
                        : <Translate id="basic.noTraits" />
                    }
                </Col>
                <Col md={2}>
                    <GameIcon type={CAPS} size={LARGE} value={offer.price} />
                </Col>
                <Col md={2}>
                    { selectedCharacter !== undefined ?
                        <ActionButton
                            character={selectedCharacter}
                            action={() => visitTavern(selectedCharacter.id, offer.id)}
                            buttonText="labels.hire"
                            tooltip="tavern.tooltip" />
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