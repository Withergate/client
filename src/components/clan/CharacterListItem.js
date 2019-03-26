import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';
import { Translate } from "react-localize-redux";
import ReactTooltip from 'react-tooltip'

import ready from '../../images/ready-icon.png';
import busy from '../../images/busy-icon.png';

import AttributeBar from './AttributeBar';
import TraitItem from './TraitItem';
import WeaponTooltip from '../item/WeaponTooltip';

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

const CharacterListItem = ({character, unequipWeapon}) => (
    <div className="mb-4 p-2 rounded bg-light">
        <div className="row">
            <div className="col">
                <h5 className="mb-2">{renderState(character.state)} {character.name} ({character.level})</h5>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-2">
                <img className="rounded mb-2" width="120px" src={character.imageUrl} alt="Avatar" />
            </div>
            <div className="col-12 col-md-4">
                <div className="mb-2">
                    <AttributeBar name="basic.combat" value={character.combat} />
                    <AttributeBar name="basic.scavenge" value={character.scavenge} />
                    <AttributeBar name="basic.craftsmanship" value={character.craftsmanship} />
                    <AttributeBar name="basic.intellect" value={character.intellect} /> 
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <b><Translate id="basic.health" /></b>: {character.hitpoints}/{character.maxHitpoints}
                    </div>
                    <div className="col-12 col-md-6">
                        <ProgressBar min={0} max={character.maxHitpoints} now={character.hitpoints} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <b><Translate id="basic.experience" /></b>: {character.experience}/{character.nextLevel}
                    </div>
                    <div className="col-12 col-md-6">
                        <ProgressBar min={0} max={character.nextLevel} now={character.experience} />
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4"> 
                { character.weapon != null ?
                    <div data-tip data-for={character.weapon.details.name}>
                        <b><Translate id="basic.weapon" /></b>:
                        <Translate id={character.weapon.details.name} />
                        <ReactTooltip id={character.weapon.details.name} effect="solid" place="left">
                            <WeaponTooltip weapon={character.weapon} />
                        </ReactTooltip>
                        <button 
                            className="btn btn-dark ml-2 btn-sm" 
                            onClick={() => unequipWeapon(character.weapon.id, character.id)}>
                            Unequip
                        </button> 
                    </div>
                    : <Translate id="basic.unarmed" /> }
            </div>
            <div className="col-6 col-md-2">
                { 
                    character.traits.length > 0 ? 
                        character.traits.map(trait => renderTrait(trait))
                        : <Translate id="basic.noTraits" />
                }
                
            </div>
        </div>
        
    </div>
);

CharacterListItem.propTypes = {
    character: PropTypes.object.isRequired,
    unequipWeapon: PropTypes.func.isRequired
};

export default CharacterListItem;