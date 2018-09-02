import React from 'react';
import PropTypes from 'prop-types';
import CharacterListItem from './CharacterListItem';

const getTextColor = (character) => {
    switch(character.state) {
        case 'READY': 
            return 'text-dark';
        case 'BUSY':
            return 'text-secondary';
        case 'INJURED':
            return 'text-danger';
        default:
            return 'text-dark';
    }
};

const CharacterSelector = ({ characters, selectedCharacter, onSelect}) => (
    <div className="p-4 dropdown">
        <button className="btn btn-dark btn-block dropdown-toggle" data-toggle="dropdown">
            { selectedCharacter !== undefined ? selectedCharacter.name : 'Select character' }
        </button>
        <div className="dropdown-menu">
            { characters.map(character => 
                <button
                    className="btn btn-light"
                    key={character.id}
                    onClick={() => onSelect(character.id)}><div className={getTextColor(character)}>{character.name}</div>
                </button>)
            }
        </div>
        <div className="mt-2">
            {
                selectedCharacter !== undefined && <CharacterListItem character={selectedCharacter} />
            }
            <small className="text-muted">The selected character will be used to perform the action of your choice.</small>
        </div>  
    </div>
    
);

CharacterSelector.propTypes = {
    characters: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object,
    onSelect: PropTypes.func.isRequired
};

export default CharacterSelector;