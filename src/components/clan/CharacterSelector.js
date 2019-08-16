import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import CharacterDetails from './CharacterDetails';
import { Row, Col, Button } from 'react-bootstrap';

const getTextColor = (character) => {
    switch(character.state) {
        case 'READY': 
            return 'text-dark';
        default:
            return 'text-danger';
    }
};

const CharacterSelector = ({ characters, selectedCharacter, onSelect}) => (
    <div className="mb-3 dropdown">
        <Row>
            <Col md={4}>
                <Button variant="dark" className="dropdown-toggle w-100" data-toggle="dropdown">
                    { selectedCharacter !== undefined ? selectedCharacter.name : <Translate id="labels.selectCharacter" /> }
                </Button>   
                <div className="dropdown-menu">
                    { characters.map(character => 
                        <Button
                            variant="light"
                            key={character.id}
                            onClick={() => onSelect(character.id)}><div className={getTextColor(character)}>{character.name}</div>
                        </Button>)
                    }
                </div>
                <small className="text-muted"><Translate id="labels.selectorDescription" /></small>
            </Col>
            <Col md={8}>
                {
                    selectedCharacter !== undefined ? 
                        <CharacterDetails character={selectedCharacter} /> 
                        : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
                }
            </Col>
        </Row>
    </div>
);

CharacterSelector.propTypes = {
    characters: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object,
    onSelect: PropTypes.func.isRequired
};

CharacterSelector.defaultProps = {
    orientation: "horizontal"
};

export default CharacterSelector;