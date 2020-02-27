import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Translate } from "react-localize-redux";
import { orderBy } from "lodash";

import { unequipItem, cancelAction, renameCharacter } from '../../actions/actionActions';
import { selectCharacter, changeCharacterSortKey, changeCharacterSortDirection } from '../../actions/uiActions';

import CharacterListItem from './CharacterListItem';
import { Form, Row, Col } from 'react-bootstrap';

const sort = (list, sort) => {
    return orderBy(list, [sort.key], [sort.direction]);
}

const renderListItem = (character, unequipItem, selectCharacter, cancelAction, profile, renameCharacter) => (
    <div key={character.id}>
        <CharacterListItem
            character={character}
            unequipItem={unequipItem}
            selectCharacter={selectCharacter}
            cancelAction={cancelAction} 
            profile={profile}
            renameCharacter={renameCharacter} />
    </div>
)

const CharacterList = (props) => (
    <div>
        <Form.Group>
            <Row>
                <Col md={2}>
                    <Form.Label ><Translate id="labels.sortKey" /></Form.Label>
                </Col>
                <Col md={2}>
                    <Translate>
                    {({ translate }) =>
                        <Form.Control as="select" value={props.sort.key} onChange={(e) => props.changeCharacterSortKey(e.target.value)}>
                            <option value="name">{translate("basic.name")}</option>
                            <option value ="state">{translate("basic.state")}</option>
                            <option value ="level">{translate("basic.level")}</option>
                            <option value ="hitpoints">{translate("basic.health")}</option>
                            <option value ="combat">{translate("basic.combat")}</option>
                            <option value ="scavenge">{translate("basic.scavenge")}</option>
                            <option value ="craftsmanship">{translate("basic.craftsmanship")}</option>
                            <option value ="intellect">{translate("basic.intellect")}</option>
                        </Form.Control>
                    }
                    </Translate>
                </Col>
                <Col md={2}>
                    <Translate>
                    {({ translate }) =>
                        <Form.Control as="select" value={props.sort.direction} onChange={(e) => props.changeCharacterSortDirection(e.target.value)}>
                            <option value="asc">{translate("labels.asc")}</option>
                            <option value ="desc">{translate("labels.desc")}</option>
                        </Form.Control>
                    }
                    </Translate>
                </Col>
            </Row>
        </Form.Group>
        {
            sort(props.characters, props.sort)
                .map(character => renderListItem(character, props.unequipItem, props.selectCharacter, props.cancelAction, props.profile, props.renameCharacter))
        }
    </div>
);

CharacterList.propTypes = {
    characters: PropTypes.array.isRequired,
    sort: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    const characters = state.clan.clan.characters;
    const profile = state.profile.profile.data;
    const sort = state.ui.sort.characters;

    return { characters, profile, sort };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        changeCharacterSortDirection,
        changeCharacterSortKey,
        unequipItem,
        selectCharacter,
        cancelAction,
        renameCharacter
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);