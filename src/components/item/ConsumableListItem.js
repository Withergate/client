import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Col, Button } from 'react-bootstrap';

const ConsumableListItem = ({consumable, selectedCharacter, useConsumable}) => (
    <div className="mb-4 p-3 rounded bg-light" key={consumable.id}>
        <Row>
            <Col md={4}>
                <img className="w-100" src={consumable.details.imageUrl} alt={consumable.details.name} />
            </Col>
            <Col md={8}>
                <b>{getTranslatedText(consumable.details.name)}</b>
                <p className="mt-2">
                    {getTranslatedText(consumable.details.description)}
                </p>
                <small>
                    <b><Translate id="basic.type" />: </b><Translate id={consumable.details.effectType} /><br />
                    <b><Translate id="basic.bonus" />: </b>{consumable.details.effect}
                </small>
            </Col>
        </Row>
        <Row>
            { selectedCharacter !== undefined ? 
                <Button 
                    variant="secondary"
                    className="button-classic ml-3 m-2" 
                    onClick={() => useConsumable(consumable.id, selectedCharacter.id)}>
                    <Translate id="labels.use" />
                </Button> 
                : <small className="text-muted ml-3 m-2"><Translate id="labels.noCharacter" /></small>
            }
        </Row>
    </div>
);

ConsumableListItem.propTypes = {
    consumable: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    useConsumable: PropTypes.func.isRequired
};

export default ConsumableListItem;