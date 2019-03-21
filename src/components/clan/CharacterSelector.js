import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import CharacterDetails from './CharacterDetails';

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
        <div className="row">
            <div className="col-12 col-md-4">
                <button className="btn btn-dark btn-block dropdown-toggle" data-toggle="dropdown">
                    { selectedCharacter !== undefined ? selectedCharacter.name : <Translate id="labels.selectCharacter" /> }
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
                <small className="text-muted"><Translate id="labels.selectorDescription" /></small>
            </div>
            <div className="col-12 col-md-8">
                {
                    selectedCharacter !== undefined ? 
                        <CharacterDetails character={selectedCharacter} /> 
                        : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
                }
            </div>
        </div>
    </div>
);

CharacterSelector.propTypes = {
    characters: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object,
    onSelect: PropTypes.func.isRequired
};

export default CharacterSelector;