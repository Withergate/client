import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Button, Card, Image } from 'react-bootstrap';
import { getRarityTextColor } from './itemUtils';

const GearListItem = ({gear, selectedCharacter, equipItem}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title className={getRarityTextColor(gear.details.rarity)}>
                {getTranslatedText(gear.details.name)}
            </Card.Title>
            <Row>
                <Col md={4}>
                    <Image src={gear.details.imageUrl} rounded width="120px" />
                </Col>
                <Col md={8}>
                    <p>
                        {getTranslatedText(gear.details.description)}
                    </p>
                    <small>
                        <b><Translate id="basic.bonus" />: </b>{gear.details.bonus}
                    </small>
                </Col>
            </Row>
        </Card.Body>
        <Card.Footer>
            { selectedCharacter !== undefined ? 
                <Button 
                    variant="outline-dark"
                    className="button-classic" 
                    onClick={() => equipItem(gear.id, 'GEAR', selectedCharacter.id)}>
                    <Translate id="labels.equip" />
                </Button> 
                : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
            }
        </Card.Footer>
    </Card>
);

GearListItem.propTypes = {
    gear: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    equipItem: PropTypes.func.isRequired
};

export default GearListItem;