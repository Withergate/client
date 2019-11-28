import React from 'react';
import PropTypes from 'prop-types';

import { INJURY_INFO, SKILLPOINT } from '../../constants/constants';
import { GameIcon } from '../shared/GameIcon';

const CharacterHeader = ({character, size}) => (
    <ul className="list-inline">
        <li className="list-inline-item">{character.name} &nbsp;</li>
        { character.hitpoints < (character.maxHitpoints * 2 / 3.0) && 
            <li className="list-inline-item">
                <GameIcon type={INJURY_INFO} size={size} noPadding />
            </li> 
        }
        {
            character.skillPoints > 0 && 
                <li className="list-inline-item"><GameIcon type={SKILLPOINT} size={size} noPadding /></li>
        }
    </ul>
);

CharacterHeader.propTypes = {
    character: PropTypes.object.isRequired,
    size: PropTypes.string.isRequired
};

export default CharacterHeader;