import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Button, Card, Col, Image } from 'react-bootstrap';

import capsIcon from '../../images/caps.png';

const ClanOfferListItem = ({offer, selectedCharacter}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title>
                {getTranslatedText(offer.details.name)}
            </Card.Title>
            <Row>
                <Col md={4}>
                    <Image rounded src={offer.details.imageUrl} width="120px" />
                </Col>
                <Col md={8}>
                    <p>{getTranslatedText(offer.details.description)} </p>
                    <b><Translate id="labels.trade.price" />: </b> {offer.details.price} <Image height="20" src={capsIcon} />
                </Col>
            </Row>
        </Card.Body>
        <Card.Footer>
            <Row>
                <Button
                    variant="outline-dark"
                    className="m-2 button-classic" 
                    // onClick={() => onVisit(selectedCharacter.id, location.location, "VISIT")}
                    >
                    <Translate id="labels.offer" />
                </Button>
            </Row>
        </Card.Footer>
    </Card>
);

ClanOfferListItem.propTypes = {
    offer: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object
};

export default ClanOfferListItem;