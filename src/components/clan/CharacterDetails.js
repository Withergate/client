import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';

import AttributeBar from './AttributeBar';
import TraitItem from './TraitItem';
import { Row, Col, Image } from 'react-bootstrap';
import { COMBAT, SCAVENGE, CRAFTSMANSHIP, INTELLECT, HEALTH, LARGE } from '../../constants/constants';
import CharacterHeader from './CharacterHeader';

const CharacterDetails = ({character}) => (
    <small>
        <Row>
            <Col md={2} xs={4} className="mb-2">
                <Row className="mb-2">
                    <Col><Image rounded className="w-100" src={character.imageUrl} /></Col>
                </Row>
                <Row>
                    <Col>
                        <CharacterHeader character={character} size={LARGE} skipName />
                    </Col>
                </Row>
            </Col>
            <Col md={4} xs={8} className="mb-2">
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
            <Col md={4} xs={4} className="mb-2">
                { character.weapon != null ? <b>{getTranslatedText(character.weapon.details.name)}</b>
                    : <Translate id="basic.unarmed" />}
                <br />
                { character.outfit != null ? <b>{getTranslatedText(character.outfit.details.name)}</b>
                        : <Translate id="basic.noOutfit" />}
                <br />
                { character.gear != null ? <b>{getTranslatedText(character.gear.details.name)}</b>
                        : <Translate id="basic.noGear" />}
                <br />
            </Col>
            <Col md={2} xs={8}>
                {character.traits.filter(trait => trait.active).length > 0 ? 
                    <ul className="list-inline">
                    {
                        character.traits.filter(trait => trait.active)
                        .map(trait => 
                            <li className="list-inline-item" key={trait.id}>
                                <TraitItem trait={trait} />
                            </li>)
                    }
                    </ul>
                    : <Translate id="basic.noTraits" />
                }
            </Col>
        </Row>
    </small>
);

CharacterDetails.propTypes = {
    character: PropTypes.object.isRequired
};

export default CharacterDetails;