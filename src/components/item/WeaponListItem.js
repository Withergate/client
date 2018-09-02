import React from 'react';
import PropTypes from 'prop-types';

const WeaponListItem = ({weapon, selectedCharacter, equipWeapon}) => (
    <div className="m-4 p-2 rounded bg-light" key={weapon.id}>
        <div className="row">
            <div className="col">
                <h5>{weapon.weaponDetails.name}</h5>
                <p>{weapon.weaponDetails.description}</p>
            </div>
        </div>
        <div className="row p-3">
            { selectedCharacter !== undefined ? 
                <button 
                    className="btn btn-dark" 
                    onClick={() => equipWeapon(weapon.id, selectedCharacter.id)}
                    disabled={selectedCharacter.weapon !== null}>
                    Equip
                </button> 
                : <small className="text-muted">Select a character to equip this weapon.</small>
            }
        </div>
    </div>
);

WeaponListItem.propTypes = {
    weapon: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    equipWeapon: PropTypes.func.isRequired
};

export default WeaponListItem;