import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';

import AttributeBar from './AttributeBar';
import TraitItem from './TraitItem';
import { Row, Col, Image } from 'react-bootstrap';
import { COMBAT, SCAVENGE, CRAFTSMANSHIP, INTELLECT, HEALTH } from '../../constants/constants';

const CharacterDetails = ({character}) => (
    <small>
        <Row>
            <Col md={2} sm={12}>
                <Row>
                    <Col><b>{character.name}</b></Col>
                </Row>
                <Row>
                    <Col><Image rounded width="60px" src={character.imageUrl} /></Col>
                </Row>
            </Col>
            <Col md={4} sm={12}>
                <AttributeBar name="basic.combat" value={character.combat} iconType={COMBAT} />
                <AttributeBar name="basic.scavenge" value={character.scavenge} iconType={SCAVENGE} />
                <AttributeBar name="basic.craftsmanship" value={character.craftsmanship} iconType={CRAFTSMANSHIP} />
                <AttributeBar name="basic.intellect" value={character.intellect} iconType={INTELLECT} />
                <AttributeBar 
                    name="basic.health"
                    value={character.hitpoints} 
                    iconType={HEALTH}
                    max={character.maxHitpoints}
                    variant={character.hitpoints < character.maxHitpoints ? "danger" : "success"} />
            </Col>
            <Col md={4} sm={12}>
                { character.weapon != null ? <b>{getTranslatedText(character.weapon.details.name)}</b>
                    : <Translate id="basic.unarmed" />}
                <br />
                { character.outfit != null ? <b>{getTranslatedText(character.outfit.details.name)}</b>
                        : <Translate id="basic.noOutfit" />}
                <br />
                { character.gear != null ? <b>{getTranslatedText(character.gear.details.name)}</b>
                        : <Translate id="basic.noGear" />}
            </Col>
            <Col md={2} sm={12}>
                {character.traits.length > 0 && 
                    character.traits.map(trait => 
                        <div key={trait.id} className="mb-1">
                            <TraitItem trait={trait} />
                        </div>) 
                }
            </Col>
        </Row>
    </small>
);

CharacterDetails.propTypes = {
    character: PropTypes.object.isRequired
};

export default CharacterDetails;