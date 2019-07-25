import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, Image, Button, ProgressBar } from 'react-bootstrap';
import { Translate } from "react-localize-redux";

import AttributeBar from '../clan/AttributeBar';
import { GameIcon } from '../shared/GameIcon';
import { CAPS, LARGE } from '../../constants/constants';
import TraitItem from '../clan/TraitItem';

const TavernOfferListItem = ({offer, visitTavern, selectedCharacter}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title>
                {offer.character.name}
            </Card.Title>
            <Row>
                <Col md={2}>
                    <Image rounded width="120px" src={offer.character.imageUrl} />
                </Col>
                <Col md={4}>
                    <AttributeBar name="basic.combat" value={offer.character.combat} />
                    <AttributeBar name="basic.scavenge" value={offer.character.scavenge} />
                    <AttributeBar name="basic.craftsmanship" value={offer.character.craftsmanship} />
                    <AttributeBar name="basic.intellect" value={offer.character.intellect} />
                    <Row>
                        <Col>
                            <Translate id="basic.health" />
                        </Col>
                        <Col>
                            <ProgressBar
                                variant="success"
                                min={0}
                                max={offer.character.maxHitpoints}
                                now={offer.character.hitpoints}
                                label={`${offer.character.hitpoints}/${offer.character.maxHitpoints}`} />
                        </Col>
                    </Row>
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
                        <Button
                            variant="dark"
                            className="button-classic"
                            onClick={() => visitTavern(selectedCharacter.id, offer.id)}
                            disabled={selectedCharacter.state !== 'READY'}>
                            <Translate id="labels.hire" />
                        </Button>
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