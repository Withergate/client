import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Button, Card, Col, Image } from 'react-bootstrap';

import { GameIcon } from '../shared/GameIcon';
import { CAPS, LARGE } from '../../constants/constants';
import { getRarityTextColor } from '../item/itemUtils';

const MarketOfferListItem = ({offer, onBuy, onCancel, clanId}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title className={getRarityTextColor(offer.details.rarity)}>
                {getTranslatedText(offer.details.name)}
            </Card.Title>
            <Row>
                <Col md={4}>
                    <Image rounded src={offer.details.imageUrl} height="120px" />
                </Col>
                <Col md={8}>
                    <p>{getTranslatedText(offer.details.description)}</p>
                    <p><b><Translate id="labels.seller" />: </b>{offer.seller.name}</p>

                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <b><Translate id="basic.price" />: </b>
                        </li>
                        <li className="list-inline-item">
                            <GameIcon type={CAPS} size={LARGE} value={offer.price} />
                        </li>
                    </ul>  
                </Col>
            </Row>
        </Card.Body>
        <Card.Footer>
            { clanId === offer.seller.id &&
                <Button 
                    variant="outline-success"
                    className="button-classic mr-2" 
                    onClick={() => onCancel(offer.id)}>
                    <Translate id="labels.cancel" />
                </Button> 
            }

            <Button 
                variant="outline-success"
                className="button-classic"
                onClick={() => onBuy(offer.id)}>
                <Translate id="labels.buy" />
            </Button>
            
        </Card.Footer>
    </Card>
);

MarketOfferListItem.propTypes = {
    offer: PropTypes.object.isRequired,
    onBuy: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    clanId: PropTypes.number.isRequired
};

export default MarketOfferListItem;