import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Button, Card, Image } from 'react-bootstrap';

const WeaponListItem = ({weapon, selectedCharacter, equipWeapon}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title>
                {getTranslatedText(weapon.details.name)}
            </Card.Title>
            <Row>
                <Col md={4}>
                    <Image src={weapon.details.imageUrl} rounded width="120px" />
                </Col>
                <Col md={8}>
                    <p>
                        {getTranslatedText(weapon.details.description)}
                    </p>
                    <small>
                        <b><Translate id="basic.type" />: </b><Translate id={weapon.details.type} /><br />
                        <b><Translate id="basic.combat" />: </b>{weapon.details.combat}
                    </small>
                </Col>
            </Row>
        </Card.Body>
        <Card.Footer>
            { selectedCharacter !== undefined ? 
                <Button 
                    variant="secondary"
                    className="button-classic" 
                    onClick={() => equipWeapon(weapon.id, selectedCharacter.id)}>
                    <Translate id="labels.equip" />
                </Button> 
                : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
            }
        </Card.Footer>
    </Card>
);

WeaponListItem.propTypes = {
    weapon: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    equipWeapon: PropTypes.func.isRequired
};

export default WeaponListItem;