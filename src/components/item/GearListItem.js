import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Button } from 'react-bootstrap';

const GearListItem = ({gear, selectedCharacter, equipGear}) => (
    <div className="mb-4 p-3 rounded bg-light" key={gear.id}>
        <Row>
            <Col md={4}>
                <img src={gear.details.imageUrl} height="120px" alt="" />
            </Col>
            <Col md={8}>
                <b>{getTranslatedText(gear.details.name)}</b>
                <p>{getTranslatedText(gear.details.description)}</p>
                <small>
                    <b><Translate id="basic.bonus" />: </b>{gear.details.bonus}
                </small>
            </Col>
        </Row>
        <Row>
            { selectedCharacter !== undefined ? 
                <Button 
                    variant="secondary"
                    className="button-classic ml-3 m-2" 
                    onClick={() => equipGear(gear.id, selectedCharacter.id)}
                    disabled={selectedCharacter.gear !== null}>
                    <Translate id="labels.equip" />
                </Button> 
                : <small className="text-muted ml-3 m-2"><Translate id="labels.noCharacter" /></small>
            }
        </Row>
    </div>
);

GearListItem.propTypes = {
    gear: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    equipGear: PropTypes.func.isRequired
};

export default GearListItem;