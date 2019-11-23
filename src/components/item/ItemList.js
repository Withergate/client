import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import ItemListItem from './ItemListItem';
import ItemFilter from './ItemFilter';
import { ALL} from '../../constants/constants';

const renderItem = (item, selectedCharacter, equipItem) => (
    <div key={item.id}>
        <ItemListItem item={item} selectedCharacter={selectedCharacter} equipItem={equipItem} />
    </div>
);

const ItemList = (props) => (
    <div>
        <ItemFilter filter={props.filter} onChange={props.changeFilter} />
        {
            props.items.length === 0 && <Translate id="labels.noItems" />
        }
        { (props.filter === ALL) ?
            props.items
            .map(item => renderItem(item, props.selectedCharacter, props.equipItem))
            : props.items.filter(item => item.details.itemType === props.filter)
            .map(item => renderItem(item, props.selectedCharacter, props.equipItem))
        }
    </div>
);

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object,
    equipItem: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired
};

export default ItemList;