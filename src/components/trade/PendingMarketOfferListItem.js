import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Card, Col, Image } from 'react-bootstrap';

import { GameIcon } from '../shared/GameIcon';
import { CAPS, LARGE } from '../../constants/constants';
import { getRarityTextColor } from '../item/itemUtils';

const PendingMarketOfferListItem = ({offer}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title className={getRarityTextColor(offer.item.details.rarity)}>
                {getTranslatedText(offer.item.details.name)}
            </Card.Title>
            <Row>
                <Col md={4} className="mb-2">
                    <Image rounded src={offer.item.details.imageUrl} className="w-100" />
                </Col>
                <Col md={8}>
                    <p className="mt-2">
                        <b><Translate id="labels.seller" />: </b>{offer.seller ? offer.seller.name : "NPC"}
                        <br />
                        <b><Translate id="labels.buyer" />: </b>{offer.buyer.name}
                    </p>
                    <div className="inline">
                        <b><Translate id="basic.price" />: </b>
                        <GameIcon type={CAPS} size={LARGE} value={offer.price} />
                    </div>
                </Col>
            </Row>
        </Card.Body>
    </Card>
);

PendingMarketOfferListItem.propTypes = {
    offer: PropTypes.object.isRequired
};

export default PendingMarketOfferListItem;