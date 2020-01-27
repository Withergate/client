import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Translate } from "react-localize-redux";
import { orderBy } from "lodash";

import CharacterDetails from './CharacterDetails';
import { Row, Col, Button } from 'react-bootstrap';
import CharacterHeader from './CharacterHeader';
import { SMALL } from '../../constants/constants';

import { selectCharacter } from '../../actions/uiActions';

const sort = (list) => {
    return orderBy(list, ["name"], ["asc"]);
}

const getTextColor = (character) => {
    switch(character.state) {
        case 'READY': 
            return 'text-dark';
        default:
            return 'text-danger';
    }
};

const CharacterSelector = ({ characters, selectedCharacter, selectCharacter}) => (
    <div className="mb-3 dropdown">
        <Row>
            <Col md={4}>
                <Button variant="dark" className="dropdown-toggle w-100" data-toggle="dropdown">
                    { selectedCharacter !== undefined ? selectedCharacter.name : <Translate id="labels.selectCharacter" /> }
                </Button>   
                <div className="dropdown-menu">
                    { sort(characters).map(character => 
                        <Button
                            className="w-100"
                            variant="light"
                            key={character.id}
                            onClick={() => selectCharacter(character.id)}>
                                <div className={getTextColor(character)}>
                                    {
                                        selectedCharacter !== undefined && selectedCharacter.id === character.id ?
                                        <b><CharacterHeader character={character} size={SMALL} /></b>
                                        : <CharacterHeader character={character} size={SMALL} />
                                    }
                                    
                                </div>
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
    selectedCharacter: PropTypes.object
};

const mapStateToProps = state => {
    const characters = state.clan.clan.characters;
    const selectedCharacter = state.clan.selectedCharacter;

    return { characters, selectedCharacter };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ selectCharacter }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSelector);