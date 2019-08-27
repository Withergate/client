import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Button, Card, Image, Row, Col } from 'react-bootstrap';
import { getRarityTextColor } from './itemUtils';

const ConsumableListItem = ({consumable, selectedCharacter, consume}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title className={getRarityTextColor(consumable.details.rarity)}>
                {getTranslatedText(consumable.details.name)}
            </Card.Title>
            <Row>
                <Col md={2}>
                    <Image src={consumable.details.imageUrl} rounded width="120px" />
                </Col>
                <Col md={10}>
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
                    onClick={() => consume(consumable.id, selectedCharacter.id)}>
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
    consume: PropTypes.func.isRequired
};

export default ConsumableListItem;