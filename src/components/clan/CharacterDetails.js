import React from 'react';
import PropTypes from 'prop-types';

import ready from '../../images/ready-icon.png';
import busy from '../../images/busy-icon.png';

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
                <h6 className="mb-2">{renderState(character.state)} {character.name}</h6>
                <img className="rounded" width="60px" src={character.imageUrl} alt="Avatar" />
                <p><small><b>Hitpoints</b>: {character.hitpoints}/{character.maxHitpoints}</small></p>
            </div>
            <div className="col-6 col-md-3">
                <table className="mb-2">
                    <tbody>
                        <tr><td><small><b>Combat</b>: {character.combat}</small></td></tr>
                        <tr><td><small><b>Scavenge</b>: {character.scavenge}</small></td></tr>
                        <tr><td><small><b>Craftsmanship</b>: {character.craftsmanship}</small></td></tr>
                        <tr><td><small><b>Intellect</b>: {character.intellect}</small></td></tr>
                    </tbody>
                </table>
            </div>
            <div className="col-6 col-md-3">
                <small><b>Weapon</b>: {character.weapon != null ? character.weapon.details.name : 'Unarmed'}</small>
            </div>
            <div className="col-6 col-md-3">
                <small>No abilities</small>
            </div>
        </div>
    </div>
);

CharacterDetails.propTypes = {
    character: PropTypes.object.isRequired
};

export default CharacterDetails;