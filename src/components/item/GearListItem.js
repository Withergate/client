import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Button, Card, Image } from 'react-bootstrap';

const GearListItem = ({gear, selectedCharacter, equipGear}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title>
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
                    variant="secondary"
                    className="button-classic" 
                    onClick={() => equipGear(gear.id, selectedCharacter.id)}>
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
    equipGear: PropTypes.func.isRequired
};

export default GearListItem;