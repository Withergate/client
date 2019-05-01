import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Button, Card, Image } from 'react-bootstrap';

const OutfitListItem = ({outfit, selectedCharacter, equipItem}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title>
                {getTranslatedText(outfit.details.name)}
            </Card.Title>
            <Row>
                <Col md={4}>
                    <Image src={outfit.details.imageUrl} rounded width="120px" />
                </Col>
                <Col md={8}>
                    <p>
                        {getTranslatedText(outfit.details.description)}
                    </p>
                    <small>
                        <b><Translate id="basic.armor" />: </b>{outfit.details.armor}
                    </small>
                </Col>
            </Row>
        </Card.Body>
        <Card.Footer>
            { selectedCharacter !== undefined ? 
                <Button 
                    variant="secondary"
                    className="button-classic" 
                    onClick={() => equipItem(outfit.id, 'OUTFIT', selectedCharacter.id)}>
                    <Translate id="labels.equip" />
                </Button> 
                : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
            }
        </Card.Footer>
    </Card>
);

OutfitListItem.propTypes = {
    outfit: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    equipItem: PropTypes.func.isRequired
};

export default OutfitListItem;