import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import ItemListItemEquipped from './ItemListItemEquipped';

const renderItem = (character, item, unequipItem) => (
    <div key={item.id}>
        <ItemListItemEquipped character={character} item={item} unequipItem={unequipItem} />
    </div>
);

const renderItems = (character, unequipItem) => (
    <div key={character.id}>
        { character.weapon && renderItem(character, character.weapon, unequipItem) }
        { character.outfit && renderItem(character, character.outfit, unequipItem) }
        { character.gear && renderItem(character, character.gear, unequipItem) }
    </div>
);

const ItemListEquipped = (props) => (
    <div>
        <h5><Translate id="labels.equippedItems" /></h5>
        {
            props.characters
                .map(character => renderItems(character, props.unequipItem))
        }
    </div>
);

ItemListEquipped.propTypes = {
    characters: PropTypes.array.isRequired,
    unequipItem: PropTypes.func.isRequired
};

export default ItemListEquipped;