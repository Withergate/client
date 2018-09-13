import React from 'react';
import PropTypes from 'prop-types';

import ConsumableListItem from './ConsumableListItem';

const renderList = (consumables, selectedCharacter, useConsumable) => (
    <div>
        {consumables.map(consumable => renderListItem(consumable, selectedCharacter, useConsumable))}
    </div>
);

const renderListItem = (consumable, selectedCharacter, useConsumable) => (
    <div key={consumable.id}>
        <ConsumableListItem consumable={consumable} selectedCharacter={selectedCharacter} useConsumable={useConsumable} />
    </div>
);

const ConsumableList = (props) => (
    <div>
        {renderList(props.consumables, props.selectedCharacter, props.useConsumable)}
    </div>
);

ConsumableList.propTypes = {
    consumables: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object,
    useConsumable: PropTypes.func.isRequired
};

export default ConsumableList;