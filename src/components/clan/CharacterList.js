import React from 'react';
import PropTypes from 'prop-types';

import CharacterListItem from './CharacterListItem';

const renderList = (characters, unequipWeapon, unequipGear, restWithCharacter) => (
    <div>
        {characters.map(character => renderListItem(character, unequipWeapon, unequipGear, restWithCharacter))}
    </div>
);

const renderListItem = (character, unequipWeapon, unequipGear, restWithCharacter) => (
    <div key={character.id}>
        <CharacterListItem
            character={character}
            unequipWeapon={unequipWeapon}
            unequipGear={unequipGear}
            restWithCharacter={restWithCharacter} />
    </div>
);

const CharacterList = (props) => (
    <div>
        {renderList(props.characters, props.unequipWeapon, props.unequipGear, props.restWithCharacter)}
    </div>
);

CharacterList.propTypes = {
    characters: PropTypes.array.isRequired,
    unequipWeapon: PropTypes.func.isRequired,
    unequipGear: PropTypes.func.isRequired,
    restWithCharacter: PropTypes.func.isRequired
};

export default CharacterList;