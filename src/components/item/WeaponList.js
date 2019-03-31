import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { Link } from 'react-router-dom';

import WeaponListItem from './WeaponListItem';

const renderList = (weapons, selectedCharacter, equipWeapon) => (
    <div>
        {weapons.map(weapon => renderListItem(weapon, selectedCharacter, equipWeapon))}
    </div>
);

const renderListItem = (weapon, selectedCharacter, equipWeapon) => (
    <div key={weapon.id}>
        <WeaponListItem weapon={weapon} selectedCharacter={selectedCharacter} equipWeapon={equipWeapon} />
    </div>
);

const WeaponList = (props) => (
    <div>
        { props.weapons.length ? 
            renderList(props.weapons, props.selectedCharacter, props.equipWeapon)
            : <div>
                 <Translate id="labels.noWeapons" /> -> <Link className="action-link" to='/action'><Translate id="header.actions" /></Link>
            </div>
        }
    </div>
);

WeaponList.propTypes = {
    weapons: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object,
    equipWeapon: PropTypes.func.isRequired
};

export default WeaponList;