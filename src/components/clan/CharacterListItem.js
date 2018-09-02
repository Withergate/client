import React from 'react';
import PropTypes from 'prop-types';

import ready from '../../images/ready-icon.png';
import busy from '../../images/busy-icon.png';
import injured from '../../images/injury-icon.png';
import avatar from '../../images/avatar.png';

import { AttributeBar } from './AttributeBar';

function renderState(state) {
    switch(state) {
        case 'READY': 
            return <img height="25" src={ready} alt="Ready" />;
        case 'BUSY':
            return <img height="25" src={busy} alt="Busy" />;
        case 'INJURED':
            return <img height="25" src={injured} alt="Injured" />;
        default:
            return <img height="25" src={injured} alt="Injured" />;
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
            <div className="col col-sm-2">
                <img className="rounded" width="120px" src={avatar} alt="Avatar" />
            </div>
            <div className="col col-sm-4">
                <div className="container">
                    <AttributeBar name="combat" value={character.combat} />
                    <AttributeBar name="scavenge" value={character.scavenge} />
                    <AttributeBar name="craftsmanship" value={character.craftsmanship} />
                    <AttributeBar name="charm" value={character.charm} />
                    <AttributeBar name="intellect" value={character.intellect} /> 
                </div>
            </div>
            <div className="col"> 
                <b>Weapon</b>: { character.weapon != null ? character.weapon.weaponDetails.name : 'Unarmed' }

                { character.weapon != null &&
                    <button 
                        className="btn btn-dark ml-2" 
                        onClick={() => unequipWeapon(character.weapon.id, character.id)}>
                        Unequip
                    </button> 
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