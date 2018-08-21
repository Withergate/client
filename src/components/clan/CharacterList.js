import React from 'react';
import PropTypes from 'prop-types';

import CharacterListItem from './CharacterListItem';

const renderList = characters => (
    <div>
        {characters.map(character => renderListItem(character))}
    </div>
);

const renderListItem = character => (
    <div key={character.id}>
        <CharacterListItem character={character} />
    </div>
);

const CharacterList = (props) => (
    <div className="w-100 p-4 float-left">
        {renderList(props.characters)}
    </div>
);

CharacterList.propTypes = {
    characters: PropTypes.array.isRequired
};

export default CharacterList;