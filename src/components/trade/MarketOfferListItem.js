import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Button, Card, Col, Image } from 'react-bootstrap';

import capsIcon from '../../images/caps.png';

const MarketOfferListItem = ({offer, selectedCharacter, onBuy, onCancel, clanId}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title>
                {getTranslatedText(offer.details.name)}
            </Card.Title>
            <Row>
                <Col md={4}>
                    <Image rounded src={offer.details.imageUrl} height="120px" />
                </Col>
                <Col md={8}>
                    <p>{getTranslatedText(offer.details.description)}</p>
                    <p><b><Translate id="labels.seller" />: </b>{offer.seller.name}</p>
                    <b><Translate id="basic.price" />: </b>{offer.price} <Image height="20" src={capsIcon} />
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