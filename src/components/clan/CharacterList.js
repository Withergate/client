import React from 'react';
import PropTypes from 'prop-types';

import CharacterListItem from './CharacterListItem';

const renderList = (characters, unequipWeapon, unequipGear) => (
    <div>
        {characters.map(character => renderListItem(character, unequipWeapon, unequipGear))}
    </div>
);

const renderListItem = (character, unequipWeapon, unequipGear) => (
    <div key={character.id}>
        <CharacterListItem character={character} unequipWeapon={unequipWeapon} unequipGear={unequipGear} />
    </div>
);

const CharacterList = (props) => (
    <div>
        {renderList(props.characters, props.unequipWeapon, props.unequipGear)}
    </div>
);

CharacterList.propTypes = {
    characters: PropTypes.array.isRequired,
    unequipWeapon: PropTypes.func.isRequired,
    unequipGear: PropTypes.func.isRequired
};

export default CharacterList;