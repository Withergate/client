import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Button, Card, Image } from 'react-bootstrap';
import { getRarityTextColor } from './itemUtils';

const WeaponListItem = ({weapon, selectedCharacter, equipItem}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title className={getRarityTextColor(weapon.details.rarity)}>
                {getTranslatedText(weapon.details.name)}
            </Card.Title>
            <Row>
                <Col md={2}>
                    <Image src={weapon.details.imageUrl} rounded width="120px" />
                </Col>
                <Col md={10}>
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
                    variant="outline-dark"
                    className="button-classic" 
                    onClick={() => equipItem(weapon.id, 'WEAPON', selectedCharacter.id)}>
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
    equipItem: PropTypes.func.isRequired
};

export default WeaponListItem;