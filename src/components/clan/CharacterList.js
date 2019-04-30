import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { orderBy } from "lodash";

import CharacterListItem from './CharacterListItem';
import { Form, Row, Col } from 'react-bootstrap';

const sort = (list, sort) => {
    return orderBy(list, [sort.key], [sort.direction]);
}

const renderListItem = (character, unequipWeapon, unequipGear, restWithCharacter) => (
    <div key={character.id}>
        <CharacterListItem
            character={character}
            unequipWeapon={unequipWeapon}
            unequipGear={unequipGear}
            restWithCharacter={restWithCharacter} />
    </div>
)

const CharacterList = (props) => (
    <div>
        <Form.Group>
            <Row>
                <Col md={3}>
                    <Form.Label ><Translate id="labels.sortKey" /></Form.Label>
                    <Form.Control as="select" value={props.sort.key} onChange={(e) => props.sortKeyAction(e.target.value)}>
                        <option value="name">Name</option>
                        <option value ="state">State</option>
                        <option value ="level">Level</option>
                        <option value ="hitpoints">Hitpoints</option>
                        <option value ="combat">Combat</option>
                        <option value ="scavenge">Scavenge</option>
                        <option value ="craftsmanship">Craftsmanship</option>
                        <option value ="intellect">Intellect</option>
                    </Form.Control>
                </Col>
                <Col md={3}>
                    <Form.Label ><Translate id="labels.sortDirection" /></Form.Label>
                    <Form.Control as="select" value={props.sort.direction} onChange={(e) => props.sortDirectionAction(e.target.value)}>
                        <option value="asc">Asc</option>
                        <option value ="desc">Desc</option>
                    </Form.Control>
                </Col>
            </Row>
        </Form.Group>
        {
            sort(props.characters, props.sort)
                .map(character => renderListItem(character, props.unequipWeapon, props.unequipGear, props.restWithCharacter))
        }
    </div>
);

CharacterList.propTypes = {
    characters: PropTypes.array.isRequired,
    unequipWeapon: PropTypes.func.isRequired,
    unequipGear: PropTypes.func.isRequired,
    restWithCharacter: PropTypes.func.isRequired,
    sort: PropTypes.object.isRequired,
    sortKeyAction: PropTypes.func.isRequired,
    sortDirectionAction: PropTypes.func.isRequired
};

export default CharacterList;