import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Button, Card, Image, Row, Col } from 'react-bootstrap';
import { RARE } from '../../constants/constants';

const ConsumableListItem = ({consumable, selectedCharacter, useConsumable}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title className={consumable.details.rarity === RARE ? 'text-warning' : ''}>
                {getTranslatedText(consumable.details.name)}
            </Card.Title>
            <Row>
                <Col md={4}>
                    <Image src={consumable.details.imageUrl} rounded width="120px" />
                </Col>
                <Col md={8}>
                    <p>
                        {getTranslatedText(consumable.details.description)}
                    </p>
                    <small>
                        <b><Translate id="basic.type" />: </b><Translate id={consumable.details.effectType} /><br />
                        <b><Translate id="basic.bonus" />: </b>{consumable.details.effect}
                    </small>
                </Col>
            </Row>
        </Card.Body>
        <Card.Footer>
            { selectedCharacter !== undefined ? 
                <Button 
                    variant="outline-dark"
                    className="button-classic" 
                    onClick={() => useConsumable(consumable.id, selectedCharacter.id)}>
                    <Translate id="labels.use" />
                </Button> 
                : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
            }
        </Card.Footer>
    </Card>
);

ConsumableListItem.propTypes = {
    consumable: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    useConsumable: PropTypes.func.isRequired
};

export default ConsumableListItem;