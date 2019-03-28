import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';

const WeaponListItem = ({weapon, selectedCharacter, equipWeapon}) => (
    <div className="m-4 p-2 rounded bg-light" key={weapon.id}>
        <div className="row">
            <div className="col-12 col-md-4">
                <img src={weapon.details.imageUrl} height="120px" alt="" />
            </div>
            <div className="col-12 col-md-8">
                <b>{getTranslatedText(weapon.details.name)}</b>
                <p>{getTranslatedText(weapon.details.description)}</p>
                <small>
                    <b><Translate id="basic.type" />: </b><Translate id={weapon.details.type} /><br />
                    <b><Translate id="basic.bonus" />: </b>{weapon.details.combat}
                </small>
            </div>
        </div>
        <div className="row p-3">
            { selectedCharacter !== undefined ? 
                <button 
                    className="btn btn-secondary button-classic" 
                    onClick={() => equipWeapon(weapon.id, selectedCharacter.id)}
                    disabled={selectedCharacter.weapon !== null}>
                    <Translate id="labels.equip" />
                </button> 
                : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
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