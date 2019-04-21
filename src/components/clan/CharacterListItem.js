import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar, Row, Col } from 'react-bootstrap';
import { Translate } from "react-localize-redux";
import ReactTooltip from 'react-tooltip'

import { getTranslatedText } from '../../translations/translationUtils';

import ready from '../../images/ready-icon.png';
import busy from '../../images/busy-icon.png';

import AttributeBar from './AttributeBar';
import TraitItem from './TraitItem';
import WeaponTooltip from '../item/WeaponTooltip';
import GearTooltip from '../item/GearTooltip';

function renderState(state) {
    switch(state) {
        case 'READY': 
            return <img height="25" src={ready} alt="Ready" />;
        case 'BUSY':
            return <img height="25" src={busy} alt="Busy" />;
        default:
            return <img height="25" src={ready} alt="Ready" />;
    }
}

function renderTrait(trait) {
    return <TraitItem key={trait.id} trait={trait} />
}

const CharacterListItem = ({character, unequipWeapon, unequipGear}) => (
    <div className="mb-4 p-3 rounded bg-light">
        <Row>
            <Col>
                <h5 className="mb-2">{renderState(character.state)} {character.name} ({character.level})</h5>
            </Col>
        </Row>
        <Row>
            <Col md={2}>
                <img className="rounded mb-2" width="120px" src={character.imageUrl} alt="Avatar" />
            </Col>
            <Col md={4}>
                <div className="mb-2">
                    <AttributeBar name="basic.combat" value={character.combat} />
                    <AttributeBar name="basic.scavenge" value={character.scavenge} />
                    <AttributeBar name="basic.craftsmanship" value={character.craftsmanship} />
                    <AttributeBar name="basic.intellect" value={character.intellect} /> 
                </div>
                <Row className="row">
                    <Col md={6}>
                        <b><Translate id="basic.health" /></b>: {character.hitpoints}/{character.maxHitpoints}
                    </Col>
                    <Col md={6}>
                        <ProgressBar min={0} max={character.maxHitpoints} now={character.hitpoints} />
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <b><Translate id="basic.experience" /></b>: {character.experience}/{character.nextLevel}
                    </Col>
                    <Col md={6}>
                        <ProgressBar min={0} max={character.nextLevel} now={character.experience} />
                    </Col>
                </Row>
            </Col>
            <Col md={4}> 
                <Row className="mb-1">
                { character.weapon != null ?
                    <div data-tip data-for={character.weapon.details.identifier}>
                        <b><Translate id="basic.weapon" /></b>: {getTranslatedText(character.weapon.details.name)}
                        <ReactTooltip id={character.weapon.details.identifier} effect="solid" place="left">
                            <WeaponTooltip weapon={character.weapon} />
                        </ReactTooltip>
                        <button 
                            className="btn btn-secondary ml-2 btn-sm button-small" 
                            onClick={() => unequipWeapon(character.weapon.id, character.id)}>
                            <Translate id="labels.unequip" />
                        </button> 
                    </div>
                    : <Translate id="basic.unarmed" /> }
                </Row>
                <Row>
                { character.gear != null ?
                    <div data-tip data-for={character.gear.details.identifier}>
                        <b><Translate id="basic.gear" /></b>: {getTranslatedText(character.gear.details.name)}
                        <ReactTooltip id={character.gear.details.identifier} effect="solid" place="left">
                            <GearTooltip gear={character.gear} />
                        </ReactTooltip>
                        <button 
                            className="btn btn-secondary ml-2 btn-sm button-small" 
                            onClick={() => unequipGear(character.gear.id, character.id)}>
                            <Translate id="labels.unequip" />
                        </button> 
                    </div>
                    : <Translate id="basic.noGear" /> }
                </Row>
            </Col>
            <Col md={2}>
                { 
                    character.traits.length > 0 ? 
                        character.traits.map(trait => renderTrait(trait))
                        : <Translate id="basic.noTraits" />
                }
            </Col>
        </Row>
    </div>
);

CharacterListItem.propTypes = {
    character: PropTypes.object.isRequired,
    unequipWeapon: PropTypes.func.isRequired,
    unequipGear: PropTypes.func.isRequired
};

export default CharacterListItem;