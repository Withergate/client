import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import ItemDetails from './ItemDetails';
import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Button, Card, Image } from 'react-bootstrap';
import { getRarityTextColor } from './itemUtils';
import { CONSUMABLE } from '../../constants/constants';

const ItemListItem = ({item, selectedCharacter, equipItem}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title className={getRarityTextColor(item.details.rarity)}>
                {getTranslatedText(item.details.name)}
            </Card.Title>
            <Row>
                <Col md={2} className="mb-2">
                    <Image src={item.details.imageUrl} rounded width="120px" />
                </Col>
                <Col md={10}>
                    <p>
                        {getTranslatedText(item.details.description)}
                    </p>
                    <ItemDetails details={item.details} />
                </Col>
            </Row>
        </Card.Body>
        <Card.Footer>
            { selectedCharacter !== undefined ? 
                <Button 
                    variant="outline-success"
                    className="button-classic" 
                    onClick={() => equipItem(item.id, selectedCharacter.id)}>
                    <Translate id={item.details.itemType === CONSUMABLE ? "labels.use" : "labels.equip"} />
                </Button> 
                : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
            }
        </Card.Footer>
    </Card>
);

ItemListItem.propTypes = {
    item: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    equipItem: PropTypes.func.isRequired
};

export default ItemListItem;