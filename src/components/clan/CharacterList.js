import React from 'react';
import PropTypes from 'prop-types';

import CharacterListItem from './CharacterListItem';

const renderList = (characters, unequipWeapon) => (
    <div>
        {characters.map(character => renderListItem(character, unequipWeapon))}
    </div>
);

const renderListItem = (character, unequipWeapon) => (
    <div key={character.id}>
        <CharacterListItem character={character} unequipWeapon={unequipWeapon} />
    </div>
);

const CharacterList = (props) => (
    <div className="w-100 p-4 float-left">
        {renderList(props.characters, props.unequipWeapon)}
    </div>
);

CharacterList.propTypes = {
    characters: PropTypes.array.isRequired,
    unequipWeapon: PropTypes.func.isRequired,
    hireCharacter: PropTypes.func.isRequired
};

export default CharacterList;