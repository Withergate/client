import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { orderBy } from "lodash";

import CharacterListItem from './CharacterListItem';
import { Form, Row, Col } from 'react-bootstrap';

const sort = (list, sort) => {
    return orderBy(list, [sort.key], [sort.direction]);
}

const renderListItem = (character, unequipItem, selectCharacter, cancelAction, profile) => (
    <div key={character.id}>
        <CharacterListItem
            character={character}
            unequipItem={unequipItem}
            selectCharacter={selectCharacter}
            cancelAction={cancelAction} 
            profile={profile} />
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
                        <Form.Control as="select" value={props.sort.key} onChange={(e) => props.sortKeyAction(e.target.value)}>
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
                        <Form.Control as="select" value={props.sort.direction} onChange={(e) => props.sortDirectionAction(e.target.value)}>
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
                .map(character => renderListItem(character, props.unequipItem, props.selectCharacter, props.cancelAction, props.profile))
        }
    </div>
);

CharacterList.propTypes = {
    characters: PropTypes.array.isRequired,
    unequipItem: PropTypes.func.isRequired,
    cancelAction: PropTypes.func.isRequired,
    sort: PropTypes.object.isRequired,
    sortKeyAction: PropTypes.func.isRequired,
    sortDirectionAction: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

export default CharacterList;