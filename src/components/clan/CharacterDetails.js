import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';

import ready from '../../images/ready-icon.png';
import busy from '../../images/busy-icon.png';
import TraitItem from './TraitItem';

function renderState(state) {
    switch(state) {
        case 'READY': 
            return <img height="15" src={ready} alt="Ready" />;
        case 'BUSY':
            return <img height="15" src={busy} alt="Busy" />;
        default:
            return <img height="15" src={ready} alt="Ready" />;
    }
}

const CharacterDetails = ({character}) => (
    <div className="p-2 rounded bg-light">
        <div className="row">
            <div className="col-6 col-md-3">
                <h6 className="mb-2">{renderState(character.state)} {character.name} ({character.level})</h6>
                <img className="rounded" width="60px" src={character.imageUrl} alt="Avatar" />
                <p>
                    <small><b><Translate id="basic.health" /></b>: {character.hitpoints}/{character.maxHitpoints}</small>
                </p>
            </div>
            <div className="col-6 col-md-3">
                <table className="mb-2">
                    <tbody>
                        <tr><td><small><b><Translate id="basic.combat" /></b>: {character.combat}</small></td></tr>
                        <tr><td><small><b><Translate id="basic.scavenge" /></b>: {character.scavenge}</small></td></tr>
                        <tr><td><small><b><Translate id="basic.craftsmanship" /></b>: {character.craftsmanship}</small></td></tr>
                        <tr><td><small><b><Translate id="basic.intellect" /></b>: {character.intellect}</small></td></tr>
                    </tbody>
                </table>
            </div>
            <div className="col-6 col-md-3">
                <small>
                    <b><Translate id="basic.weapon" /></b>: {character.weapon != null ? getTranslatedText(character.weapon.details.name) 
                    : <Translate id="basic.unarmed" />}
                </small>
            </div>
            <div className="col-6 col-md-3">
                {character.traits.length > 0 && 
                    character.traits.map(trait => 
                        <div key={trait.id} className="mb-1">
                            <TraitItem trait={trait} />
                        </div>) 
                }
            </div>
        </div>
    </div>
);

CharacterDetails.propTypes = {
    character: PropTypes.object.isRequired
};

export default CharacterDetails;