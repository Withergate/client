import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Button } from 'react-bootstrap';

const WeaponListItem = ({weapon, selectedCharacter, equipWeapon}) => (
    <div className="mb-4 p-3 rounded bg-light" key={weapon.id}>
        <Row>
            <Col md={4}>
                <img src={weapon.details.imageUrl} height="120px" alt="" />
            </Col>
            <Col md={8}>
                <b>{getTranslatedText(weapon.details.name)}</b>
                <p>{getTranslatedText(weapon.details.description)}</p>
                <small>
                    <b><Translate id="basic.type" />: </b><Translate id={weapon.details.type} /><br />
                    <b><Translate id="basic.bonus" />: </b>{weapon.details.combat}
                </small>
            </Col>
        </Row>
        <Row>
            { selectedCharacter !== undefined ? 
                <Button 
                    variant="secondary"
                    className="button-classic ml-3 m-2" 
                    onClick={() => equipWeapon(weapon.id, selectedCharacter.id)}
                    disabled={selectedCharacter.weapon !== null}>
                    <Translate id="labels.equip" />
                </Button> 
                : <small className="text-muted ml-3 m-2"><Translate id="labels.noCharacter" /></small>
            }
        </Row>
    </div>
);

WeaponListItem.propTypes = {
    weapon: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    equipWeapon: PropTypes.func.isRequired
};

export default WeaponListItem;