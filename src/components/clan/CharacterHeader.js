import React from 'react';
import PropTypes from 'prop-types';

import { INJURY_INFO, SKILLPOINT } from '../../constants/constants';
import { GameIcon } from '../shared/GameIcon';

const CharacterHeader = ({character, size, skipName}) => (
    <div className="inline">
        { character.hitpoints < (character.maxHitpoints * 2 / 3.0) && 
            <GameIcon type={INJURY_INFO} size={size} noPadding />
        }
        {
            character.skillPoints > 0 && 
                <GameIcon type={SKILLPOINT} size={size} noPadding />
        }
        { !skipName && <span>{character.name}</span> }
    </div>
);

CharacterHeader.propTypes = {
    character: PropTypes.object.isRequired,
    size: PropTypes.string.isRequired,
    skipName: PropTypes.bool
};

export default CharacterHeader;