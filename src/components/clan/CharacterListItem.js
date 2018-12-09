import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';

import ready from '../../images/ready-icon.png';
import busy from '../../images/busy-icon.png';

import { AttributeBar } from './AttributeBar';

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

const CharacterListItem = ({character, unequipWeapon}) => (
    <div className="mb-4 p-2 rounded bg-light">
        <div className="row">
            <div className="col">
                <h5 className="mb-2">{renderState(character.state)} {character.name}</h5>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-2">
                <img className="rounded mb-2" width="120px" src={character.imageUrl} alt="Avatar" />
            </div>
            <div className="col-12 col-md-4">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <b>Hitpoints</b>: {character.hitpoints}/{character.maxHitpoints}
                    </div>
                    <div className="col-12 col-md-6">
                        <ProgressBar min={0} max={character.maxHitpoints} now={character.hitpoints} />
                    </div>
                </div>
                <div className="mb-2">
                    <AttributeBar name="combat" value={character.combat} />
                    <AttributeBar name="scavenge" value={character.scavenge} />
                    <AttributeBar name="craftsmanship" value={character.craftsmanship} />
                    <AttributeBar name="intellect" value={character.intellect} /> 
                </div>
            </div>
            <div className="col-6 col-md-4"> 
                <b>Weapon</b>: { character.weapon != null ? character.weapon.details.name : 'Unarmed' }

                { character.weapon != null &&
                    <button 
                        className="btn btn-dark ml-2 btn-sm" 
                        onClick={() => unequipWeapon(character.weapon.id, character.id)}>
                        Unequip
                    </button> 
                }
            </div>
            <div className="col-6 col-md-2">
                Abilities
            </div>
        </div>
        
    </div>
);

CharacterListItem.propTypes = {
    character: PropTypes.object.isRequired,
    unequipWeapon: PropTypes.func.isRequired
};

export default CharacterListItem;