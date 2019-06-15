import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Button, Card, Col, Image } from 'react-bootstrap';

import { GameIcon } from '../shared/GameIcon';
import { CAPS, LARGE, RARE } from '../../constants/constants';

const MarketOfferListItem = ({offer, selectedCharacter, onBuy, onCancel, clanId}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title className={offer.details.rarity === RARE ? 'text-warning' : ''}>
                {getTranslatedText(offer.details.name)}
            </Card.Title>
            <Row>
                <Col md={4}>
                    <Image rounded src={offer.details.imageUrl} height="120px" />
                </Col>
                <Col md={8}>
                    <p>{getTranslatedText(offer.details.description)}</p>
                    <p><b><Translate id="labels.seller" />: </b>{offer.seller.name}</p>

                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <b><Translate id="basic.price" />: </b>
                        </li>
                        <li class="list-inline-item">
                            <GameIcon type={CAPS} size={LARGE} value={offer.price} />
                        </li>
                    </ul>  
                </Col>
            </Row>
        </Card.Body>
        <Card.Footer>
            { clanId === offer.seller.id &&
                <Button 
                    variant="outline-dark"
                    className="button-classic mr-2" 
                    onClick={() => onCancel(offer.id)}>
                    <Translate id="labels.cancel" />
                </Button> 
            }
            { selectedCharacter !== undefined ? 
                <Button 
                    variant="dark"
                    className="button-classic" 
                    disabled={selectedCharacter.state !== 'READY'}
                    onClick={() => onBuy(selectedCharacter.id, offer.id)}>
                    <Translate id="labels.buy" />
                </Button> 
                : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
            }
        </Card.Footer>
    </Card>
);

MarketOfferListItem.propTypes = {
    offer: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    onBuy: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    clanId: PropTypes.number.isRequired
};

export default MarketOfferListItem;