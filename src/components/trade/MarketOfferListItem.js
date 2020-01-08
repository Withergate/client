import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Button, Card, Col, Image } from 'react-bootstrap';

import { GameIcon } from '../shared/GameIcon';
import { CAPS, LARGE } from '../../constants/constants';
import { getRarityTextColor } from '../item/itemUtils';
import ItemDetails from '../item/ItemDetails';
import TooltipWrapper from '../shared/TooltipWrapper';

const MarketOfferListItem = ({offer, onBuy, onCancel, clanId}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title className={getRarityTextColor(offer.details.rarity)}>
                {getTranslatedText(offer.details.name)}
            </Card.Title>
            <Row>
                <Col md={4} className="mb-2">
                    <Image rounded src={offer.details.imageUrl} className="w-100" />
                </Col>
                <Col md={8}>
                    <p>{getTranslatedText(offer.details.description)}</p>
                    <ItemDetails details={offer.details} />

                    <p className="mt-2"><b><Translate id="labels.seller" />: </b>{offer.seller ? offer.seller.name : "NPC"}</p>

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
            { offer.seller && clanId === offer.seller.id &&
                <Button 
                    variant="outline-success"
                    className="button-classic mr-2" 
                    onClick={() => onCancel(offer.id)}>
                    <Translate id="labels.cancel" />
                </Button> 
            }
            {
                console.log(offer.seller, clanId)
            }
            { (!offer.seller || clanId !== offer.seller.id) &&
                <TooltipWrapper textKey="labels.buyTooltip">
                    <Button 
                        variant="outline-success"
                        className="button-classic"
                        onClick={() => onBuy(offer.id)}>
                        <Translate id="labels.buy" />
                    </Button>
                </TooltipWrapper>
            }
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