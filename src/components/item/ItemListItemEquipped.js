import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import ItemDetails from './ItemDetails';
import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Button, Card, Image } from 'react-bootstrap';
import { getRarityTextColor } from './itemUtils';

const ItemListItemEquipped = ({character, item, unequipItem}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title className={getRarityTextColor(item.details.rarity)}>
                {getTranslatedText(item.details.name)}
            </Card.Title>
            <Row className="mb-2">
                <Col md={4} className="mb-2">
                    <Image src={item.details.imageUrl} rounded className="w-100" />
                </Col>
                <Col md={8}>
                    <p>
                        {getTranslatedText(item.details.description)}
                    </p>
                    <ItemDetails details={item.details} />
                </Col>
            </Row>
            <Row>
                <Col><b><Translate id="labels.equippedBy" data={{ character: character.name }} /></b></Col>
            </Row>
        </Card.Body>
        <Card.Footer>
            <Button 
                variant="outline-success"
                className="button-classic" 
                onClick={() => unequipItem(item.id, character.id)}>
                <Translate id="labels.unequip" />
            </Button> 
        </Card.Footer>
    </Card>
);

ItemListItemEquipped.propTypes = {
    character: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    unequipItem: PropTypes.func.isRequired
};

export default ItemListItemEquipped;